import { Component } from '@angular/core';
import { DataService } from './services/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string = 'OSU Schedule Board';
  
  newRequest:boolean = false;
  newNoticeBool:boolean = false;
  
  constructor(private data:DataService) {}
  
  ngOnInit() {
  }
  
  newFlight() {
    this.newRequest = !this.newRequest;
  }
  
  newNotice() {
    this.newNoticeBool = !this.newNoticeBool;
  }
}
