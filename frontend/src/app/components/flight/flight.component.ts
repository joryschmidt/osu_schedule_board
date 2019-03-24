import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  constructor() { }

  @Input() flight:any;

  ngOnInit() {
  }

  editFlight() {
    console.log('edit flight form');
  }
}
