import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {

  constructor(private data:DataService) { }
  
  @Input() hangar:number;
  planes:any;

  ngOnInit() {
    this.data.getPlanesByHangar(this.hangar).subscribe(planes => {
      this.planes = planes;
    });
  }
}
