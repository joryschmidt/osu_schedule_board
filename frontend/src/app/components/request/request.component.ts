import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Airplane } from '../../models/airplane';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.scss']
})
export class RequestComponent implements OnInit {

  constructor(private data:DataService) { }
  
  ngOnInit() {
    if (this.tail) this.aircraft.tail = this.tail;
  }

  aircraft = new Airplane();
  @Input() tail:string;
  @Input() newRequest:boolean;
  @Output() newRequestChange = new EventEmitter<boolean>();
  @Output() planeChange = new EventEmitter<any>();
  
  submitRequest() {
    this.data.newFlight(this.aircraft).subscribe(response => {
      this.planeChange.emit(this.aircraft);
      this.newRequestChange.emit(false);
    });
  }
  
  discardRequest() {
    this.aircraft = new Airplane();
    this.newRequestChange.emit(false);
  }
}
