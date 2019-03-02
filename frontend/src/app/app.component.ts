import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'OSU Schedule Board';
  newRequest = false;
  
  
  newFlight() {
    this.newRequest = !this.newRequest;
  }
}
