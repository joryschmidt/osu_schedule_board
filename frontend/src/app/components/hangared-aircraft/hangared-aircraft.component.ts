import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hangared-aircraft',
  templateUrl: './hangared-aircraft.component.html',
  styleUrls: ['./hangared-aircraft.component.scss']
})
export class HangaredAircraftComponent implements OnInit {

  constructor(private data:DataService) { }
  
  flights:any;

  ngOnInit() {
    this.data.getHangaredAircraft().subscribe(flights => this.flights = flights);
  }

}
