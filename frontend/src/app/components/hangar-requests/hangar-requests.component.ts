import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hangar-requests',
  templateUrl: './hangar-requests.component.html',
  styleUrls: ['./hangar-requests.component.scss']
})
export class HangarRequestsComponent implements OnInit, OnChanges {

  constructor(private data:DataService) { }
  
  flights:any;

  ngOnInit() {
    this.data.getHangarRequests().subscribe(flights => {
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
