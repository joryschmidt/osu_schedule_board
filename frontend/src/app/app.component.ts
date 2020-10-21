import { Component } from '@angular/core';
import { DataService } from './services/data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'OSU Schedule Board';

  planeChange:boolean = false;
  newRequest:boolean = false;
  newNoticeBool:boolean = false;
  date:any;
  
  user:any;
  isAdmin:boolean = false;
  
  constructor(private data:DataService) {}
  
  ngOnInit() {
    this.data.getUser().subscribe(res => {
      this.user = res;
      if (this.user.admin) this.isAdmin = true;
    });
  }
  
  newFlight() {
    this.newRequest = !this.newRequest;
    
    // clicking on background will remove new request from screen
    setTimeout(()=> { $('.request__backdrop').on('click', (event) => {
      if ($(event.target).is('.request__backdrop')) this.newRequest= !this.newRequest;
    }); }, 300);
  }
  
  generateReport() {
    // for style
    if (this.date) {
      // if date is selected, generate report
      this.data.getFlightsByDate(this.date).subscribe(response => {
        console.log(response);
        if (response['length'] == 0) {
          let wind = window.open('', 'Nothing here', 'width=500, height=500');
          wind.document.write(`<h2 style="font-family: sans-serif">I got nothing for ${this.date}, homie</h2>`);
          return '';
        }
        var date = response[0].date;
        var items = [];
        var wind = window.open('', date, 'width=1000, height=1000');
        
        // create lines of html from the response
        for (let flight in response) {
          let tail = response[flight].tail || '';
          let time = response[flight].time ? `| ${ response[flight].time }` : '';
          let remarks = response[flight].remarks ? `| ${ response[flight].remarks }` : '';
          
          let item = `<p style="font-family: sans-serif;">${tail} ${time} ${remarks}</p>`;
          items.push(item);
        }
        
        // write lines to new opened window
        wind.document.write(`<h1 style="font-family: sans-serif;">${date}</h1>`);
        for (var i=0, end=items.length; i<end; i++) {
          wind.document.write(items[i]);
        }
      });
      
    } else {
      let wind = window.open('', 'No date, man', 'width=500, height=500');
      wind.document.write('<h2 style="font-family: sans-serif;">You have to select a date if you want a report.</h2>');
    }
  }
  
  newNotice() {
    this.newNoticeBool = !this.newNoticeBool;
    
    // clicking on background will remove new special notice from screen
    setTimeout(()=> { $('.special-notices__backdrop').on('click', (event) => {
      if ($(event.target).is('.special-notices__backdrop')) this.newNoticeBool = !this.newNoticeBool;
    }); }, 300);
  }

  planeChangeHandler(aircraft:any) {
    this.planeChange = true;
  }
  
  // logout() {
  //   this.data.logout().subscribe(res => {
  //     console.log('Logged out'); 
  //     window.location.href = '/logout'; 
  //   });
  // }
}
