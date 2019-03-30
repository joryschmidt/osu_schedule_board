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
  
  notices:any;
  newNoticeObj:any;
  
  constructor(private data:DataService) {}
  
  ngOnInit() {
    this.data.getAllNotices().subscribe(notices => this.notices = notices);
    this.newNoticeObj = {};
  }
  
  newFlight() {
    this.newRequest = !this.newRequest;
  }
  
  newNotice() {
    this.newNoticeBool = !this.newNoticeBool;
  }
  
  submitNewNotice() {
    this.data.submitNotice(this.newNoticeObj).subscribe(response => {
      console.log('New notice submitted');
    });
  }
}
