import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-transients',
  templateUrl: './transients.component.html',
  styleUrls: ['./transients.component.scss']
})
export class TransientsComponent implements OnInit, OnChanges {

  constructor(private data:DataService) { }

  flights:any;

  ngOnInit() {
    this.data.getTransientFlights().subscribe(flights => {
      if (Array.isArray(flights)) flights = flights.filter(flight => !flight.hangared || flight.hangared == 'none');
      this.flights = flights;
    });
  }

  // no reload rendering
  @Input() planeChange:any;
  @Output() requestChanged = new EventEmitter<any>();

  flightDeleteHandler(deleted:boolean) {
    if (deleted) this.ngOnInit();
  }

  requestChangeHandler(request:any) {
    this.ngOnInit();
    this.requestChanged.emit(request);
  }

  ngOnChanges() {
    this.ngOnInit();
  }
}
