import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PlaneComponent } from './components/plane/plane.component';
import { FlightComponent } from './components/flight/flight.component';
import { RequestComponent } from './components/request/request.component';
import { HangarComponent } from './components/hangar/hangar.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaneComponent,
    RequestComponent,
    FlightComponent,
    HangarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
