import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-transients',
  templateUrl: './transients.component.html',
  styleUrls: ['./transients.component.scss']
})
export class TransientsComponent implements OnInit {

  constructor(private data:DataService) { }

  flights:any;

  ngOnInit() {
    this.data.getTransientFlights().subscribe(flights => {
      if (Array.isArray(flights)) flights.filter(flight => flight.transient);
      this.flights = flights;
    });
  }

}
