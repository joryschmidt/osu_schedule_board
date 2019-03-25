import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

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
  
  newFlight() {
    this.newRequest = !this.newRequest
  }
}
