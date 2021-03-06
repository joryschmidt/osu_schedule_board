import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss']
})
export class EditRequestComponent implements OnInit {

  constructor(private data:DataService) { }
  aircraftCopy:any;

  ngOnInit() {
    this.aircraftCopy = Object.assign({}, this.aircraft);
  }

  @Input() aircraft:any;
  @Output() aircraftChange = new EventEmitter<any>();
  @Input() newEditRequest:boolean;
  @Output() newEditRequestChange = new EventEmitter<boolean>();
  @Output() planeChange = new EventEmitter<any>();
  
  editRequest() {
    this.data.updateFlight(this.aircraft).subscribe(response => {
      this.planeChange.emit(this.aircraft);
      this.newEditRequestChange.emit(false);
    });
  }
  
  discardRequest() {
    this.aircraftChange.emit(this.aircraftCopy);
    this.newEditRequestChange.emit(false);
  }
  
  completeRequest() {
    this.data.deleteFlight(this.aircraft._id).subscribe(response => {
      this.planeChange.emit(null);
    });
  }
}
