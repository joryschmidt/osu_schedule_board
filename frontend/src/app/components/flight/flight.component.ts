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
    var diff;
    
    var year = Number(date.slice(0,4));
    var month = Number(date.slice(5,7));
    var day = Number(date.slice(8,10));
    
    else if (time) {
      var hours = Number(time.slice(0,2));
      var minutes = Number(time.slice(2,4));
      date = DateTime.local(year, month, day, hours, minutes);
      diff = now.diff(date, 'days').toObject().days;
      console.log(diff);
      
      // turns red if date is today, there's a time, and it's 30 minutes prior to over
      if (now.plus({ minutes: 30 }) > date && date.day == now.day && diff < 1 && diff > -1) return 'red';
    }
    
    date = DateTime.local(year, month, day);
    diff = now.diff(date, 'days').toObject().days;
    console.log(diff);
    
    // checks if date is today
    if (diff > -1 && diff < 1 && now.day == date.day) return 'yellow';
    
    // checks if date is specifically tomorrow
    if (diff > -2 && diff < 2 && now.plus({ days: 1}).day == date.day) return 'purple';
      
    return false;
  }
}
