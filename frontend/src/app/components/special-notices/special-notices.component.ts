import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-special-notices',
  templateUrl: './special-notices.component.html',
  styleUrls: ['./special-notices.component.scss']
})
export class SpecialNoticesComponent implements OnInit {

  constructor(private data:DataService) { }
  
  @Input() newNoticeBool:boolean = false;
  @Output() newNoticeBoolChange = new EventEmitter<boolean>;
  
  notices:any;
  newNoticeObj:any;

  ngOnInit() {
    this.data.getAllNotices().subscribe(notices => this.notices = notices);
    this.newNoticeObj = {};
  }

  submitNewNotice() {
    this.data.submitNotice(this.newNoticeObj).subscribe(response => {
      console.log('New notice submitted');
    });
  }
  
  discardNotice() {
    this.newNoticeObj = {};
    this.newNoticeBoolChange.emit(false);
  }
}
