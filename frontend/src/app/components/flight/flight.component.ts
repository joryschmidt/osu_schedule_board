import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DateTime } from 'luxon';
import * as $ from 'jquery';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  // 
  // This component has to let parent component know it must rerender
  //
  constructor() { }

  @Input() flight:any;
  @Input() based:boolean;
  @Output() flightDeleted = new EventEmitter<boolean>();
  @Output() requestChanged = new EventEmitter<any>();
  newEditRequest:boolean = false;
  displayStyle:string;

  ngOnInit() {
    // remove conditional statement to apply styles to transients
    if (this.based) this.displayStyle = this.determineStyle();
  }

  editFlight() {
    this.newEditRequest = !this.newEditRequest;
    
    // clicking on background will remove edit request from screen
    setTimeout(()=> { $('.request__backdrop').on('click', (event) => {
      if ($(event.target).is('.request__backdrop')) this.newEditRequest = !this.newEditRequest;
    }); }, 300);
  }

  // changes aircraft without page reload
  planeChangeHandler(aircraft:any) {
    if (aircraft) {
      this.flight = aircraft;
      this.ngOnInit();
    }
    else this.flightDeleted.emit(true);
  }
  
  // this method determines if a flight should be given a background color
  determineStyle():string {
    if (this.flight.RON) return 'green';
    
    if (this.flight.date) var date = this.flight.date;
    if (this.flight.time) var time = this.flight.time;
    
    if (!date) return '';
    
    var now = DateTime.local();
    var diff;
    
    var year = Number(date.slice(0,4));
    var month = Number(date.slice(5,7));
    var day = Number(date.slice(8,10));
    
    if (time) {
      var hours = Number(time.slice(0,2));
      var minutes = Number(time.slice(2,4));
      date = DateTime.local(year, month, day, hours, minutes);
      diff = now.diff(date, 'days').toObject().days;
      
      // turns red if date is today, there's a time, and it's 30 minutes prior to over
      if (now.plus({ minutes: 30 }) > date && date.day == now.day && diff < 1 && diff > -1) return 'red';
    }
    
    date = DateTime.local(year, month, day);
    diff = now.diff(date, 'days').toObject().days;
    
    // checks if date is today
    if (diff > -1 && diff < 1 && now.day == date.day) return 'yellow';
    
    // checks if date is specifically tomorrow
    if (diff > -2 && diff < 2 && now.plus({ days: 1}).day == date.day) return 'purple';
      
    return '';
  }
}
