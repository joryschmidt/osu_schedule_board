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
  notices:any;
  
  constructor(private data:DataService) {}
  
  ngOnInit() {
    this.data.getAllNotices().subscribe(notices => this.notices = notices);
  }
  
  newFlight() {
    this.newRequest = !this.newRequest;
  }
}
