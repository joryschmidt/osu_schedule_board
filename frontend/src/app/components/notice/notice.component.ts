import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.text = this.notice.text;
    this.noticeCopy = this.notice;
  }
  
  text:string;
  noticeCopy:any;
  
  @Input() notice:any;
  
  @Input() editNoticeBool:boolean;
  @Output() editNoticeBoolChange = new EventEmitter<boolean>();
  
  @Input() editNoticeObj:any;
  @Output() editNoticeObjChange = new EventEmitter<any>();

  editNotice() {
    this.editNoticeObjChange.emit(this.noticeCopy);
    this.editNoticeBoolChange.emit(!this.editNoticeBool);
    
    // clicking on background will remove edit special notice from screen
    setTimeout(()=> { $('.special-notices__backdrop').on('click', (event) => {
      if ($(event.target).is('.special-notices__backdrop')) this.editNoticeBoolChange.emit(!this.editNoticeBool);
    }); }, 300);
  }
}
