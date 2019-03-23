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
  
  constructor(private data:DataService) {}
  
  ngOnInit() {
    this.data.getBasedPlanes().subscribe(result => console.log(result));
  }
  
  newFlight() {
    this.newRequest = !this.newRequest;
  }
}
