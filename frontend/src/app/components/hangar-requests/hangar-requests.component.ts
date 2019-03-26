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
    this.data.getTransientPlanes().subscribe(planes => {
      this.flights = planes.filter(plane => plane.hangarRequested);
    });
  }

}
