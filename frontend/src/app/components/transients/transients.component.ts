import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChange, SimpleChanges } from '@angular/core';
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

  // delete flights without rerender
  flightDeleteHandler(deleted:boolean) {
    if (deleted) this.ngOnInit();
  }

  // This is to rerender transient aircraft component on new request

  @Input() planeChange:boolean;
  @Output() planeChangeChange = new EventEmitter<boolean>();

  ngOnChanges() {
    this.ngOnInit();
    this.planeChange = false;
    this.planeChangeChange.emit(false);
  }
}
