import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hangared-aircraft',
  templateUrl: './hangared-aircraft.component.html',
  styleUrls: ['./hangared-aircraft.component.scss']
})
export class HangaredAircraftComponent implements OnInit, OnChanges {

  constructor(private data:DataService) { }
  
  flights:any;

  ngOnInit() {
    this.data.getHangaredAircraft().subscribe(flights => this.flights = flights);
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
