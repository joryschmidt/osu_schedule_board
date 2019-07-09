import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'OSU Schedule Board';
  
  newRequest:boolean = false;
  newNoticeBool:boolean = false;
  date:any;
  
  constructor(private data:DataService) {}
  
  ngOnInit() {
  }
  
  newFlight() {
    this.newRequest = !this.newRequest;
  }
  
  generateReport() {
    if (this.date) {
      // if date is selected, generate report
      this.data.getFlightsByDate(this.date).subscribe(response => {
        var date = response[0].date;
        var items = [];
        var wind = window.open('', date, 'width=1000, height=1000');
        
        // create lines of html from the response
        for (let flight in response) {
          let tail = response[flight].tail || '';
          let time = response[flight].time ? `| ${ response[flight].time }` : '';
          let remarks = response[flight].remarks ? `| ${ response[flight].remarks }` : '';
          
          let item = `<p>${tail} ${time} ${remarks}</p>`;
          items.push(item);
        }
        
        // write lines to new opened window
        wind.document.write(`<h1>${date}</h1>`);
        for (var i=0, end=items.length; i<end; i++) {
          wind.document.write(items[i]);
        }
      });
      
    } else {
      console.log('Please select a date');
    }
  }
  
  newNotice() {
    this.newNoticeBool = !this.newNoticeBool;
  }
}
