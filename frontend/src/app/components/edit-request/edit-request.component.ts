import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-edit-request',
  templateUrl: './edit-request.component.html',
  styleUrls: ['./edit-request.component.scss']
})
export class EditRequestComponent implements OnInit {

  constructor(private data:DataService) { }

  ngOnInit() {
    
  }

  @Input() aircraft:any;
  @Input() newEditRequest:boolean;
  @Output() newEditRequestChange = new EventEmitter<boolean>();
  
  submitRequest() {
    this.data.updateFlight(this.aircraft).subscribe(response => {
      window.location.reload();
    });
  }
  
  discardRequest() {
    this.newEditRequestChange.emit(false);
  }
}
