import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-plane',
  templateUrl: './plane.component.html',
  styleUrls: ['./plane.component.scss']
})
export class PlaneComponent implements OnInit {

  constructor(private data:DataService) { }
  
  @Input() plane:any;
  tail:number;
  flights:any;
  newRequest:boolean = false;

  ngOnInit() {
    this.tail = this.plane.tail;
    
    this.data.getFlightsByTail(this.tail).subscribe(flights => this.flights = flights);
  }
  
  planeChangeHandler(aircraft:any) {
    this.plane = aircraft;
    this.ngOnInit();
  }
  
  newFlight() {
    this.newRequest = !this.newRequest;

    // clicking on background will remove new request from screen
    setTimeout(()=> { $('.request__backdrop').on('click', (event) => {
      if ($(event.target).is('.request__backdrop')) this.newRequest = !this.newRequest;
    }); }, 300);
  }
}
