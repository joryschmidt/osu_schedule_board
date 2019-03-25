import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

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

  aircraft = { tail: '' }
  @Input() tail:string;
  @Input() newRequest:boolean;
  @Output() newRequestChange = new EventEmitter<boolean>();
  
  submitRequest() {
    this.data.newFlight(this.aircraft).subscribe(response => {
      window.location.reload();
    });
  }
  
  discardRequest() {
    this.aircraft = { tail: '' };
    this.newRequestChange.emit(false);
  }
}
