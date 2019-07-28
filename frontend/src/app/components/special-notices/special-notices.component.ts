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
  @Output() newNoticeBoolChange = new EventEmitter<boolean>();
  editNoticeBool:boolean = false;
  
  notices:any;
  newNoticeObj:any;
  editNoticeObj:any;

  ngOnInit() {
    this.data.getAllNotices().subscribe(notices => this.notices = notices);
    this.newNoticeObj = {};
    this.editNoticeObj = {};
  }
  
  // New Notice Methods
  submitNewNotice() {
    this.data.submitNotice(this.newNoticeObj).subscribe(response => {
      window.location.reload();
    });
  }
  
  discardNotice() {
    this.newNoticeObj = {};
    this.newNoticeBool = false;
    this.newNoticeBoolChange.emit(false);
  }
  
  // Edit Notice Methods
  submitEditNotice() {
    console.log(this.editNoticeObj);
    this.data.editNotice(this.editNoticeObj).subscribe(response => {
      window.location.reload();
    });
  }
  
  discardEditNotice() {
    this.editNoticeObj = {};
    this.editNoticeBool = !this.editNoticeBool;
  }
  
  deleteNotice() {
    this.data.deleteNotice(this.editNoticeObj._id).subscribe(response => {
      window.location.reload();
    });
  }
}
