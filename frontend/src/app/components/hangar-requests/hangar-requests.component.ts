import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hangar-requests',
  templateUrl: './hangar-requests.component.html',
  styleUrls: ['./hangar-requests.component.scss']
})
export class HangarRequestsComponent implements OnInit {

  constructor(private data:DataService) { }
  
  flights:any;

  ngOnInit() {
    this.data.getTransientFlights().subscribe(flights => {
      if (Array.isArray(flights)) this.flights = flights.filter(flight => flight.transient);
    });
  }

}
