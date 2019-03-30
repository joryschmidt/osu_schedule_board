import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.text = this.notice.text;
  }
  
  @Input() notice:any;
  text:string;

}
