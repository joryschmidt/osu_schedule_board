import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PlaneComponent } from './components/plane/plane.component';
import { FlightComponent } from './components/flight/flight.component';
import { RequestComponent } from './components/request/request.component';
import { HangarComponent } from './components/hangar/hangar.component';
import { EditRequestComponent } from './components/edit-request/edit-request.component';
import { HangarRequestsComponent } from './components/hangar-requests/hangar-requests.component';
import { TransientsComponent } from './components/transients/transients.component';
import { HangaredAircraftComponent } from './components/hangared-aircraft/hangared-aircraft.component';
import { NoticeComponent } from './components/notice/notice.component';
import { SpecialNoticesComponent } from './components/special-notices/special-notices.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaneComponent,
    RequestComponent,
    FlightComponent,
    HangarComponent,
    EditRequestComponent,
    HangarRequestsComponent,
    TransientsComponent,
    HangaredAircraftComponent,
    NoticeComponent,
    SpecialNoticesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
