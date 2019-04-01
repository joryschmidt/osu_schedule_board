import { Component, OnInit, Input } from '@angular/core';
import { DateTime } from 'luxon';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  constructor() { }

  @Input() flight:any;
  @Input() based:boolean;
  newEditRequest:boolean = false;
  displayStyle:string;

  ngOnInit() {
    this.displayStyle = this.determineStyle();
  }

  editFlight() {
    this.newEditRequest = !this.newEditRequest;
  }
  
  determineStyle() {
    if (this.flight.RON) return 'green';
    
    if (this.flight.date) var date = this.flight.date;
    if (this.flight.time) var time = this.flight.time;
    
    if (!date) return false;
    
    var now = DateTime.local();
    var year = Number(date.slice(0,4));
    var month = Number(date.slice(5,7));
    var day = Number(date.slice(8,10));
    
    else if (time) {
      var hours = Number(time.slice(0,2));
      var minutes = Number(time.slice(2,4));
      date = DateTime.local(year, month, day, hours, minutes);
      
      console.log(this.flight.tail, now.day, now.plus({ days: 1 }).day, date.day);
      if (now.plus({ minutes: 30 }) > date) return 'red';
      if (now.day == date.day) return 'yellow';
      // this must check for months in advance
      if (now.plus({ days: 1 }).day == date.day) return 'purple';
      
    } 
    
    date = DateTime.local(year, month, day);
    if (now.month == date.month) {
      if (now.day == date.day) return 'yellow';
      if (now.plus({ days: 1 }).day == date.day) return 'purple';
    }
    
    // else return false;
  }
}
