import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Plane } from '../models/plane';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }
  
  getAllFlights() {
    return this.http.get('/flight/all');
  }
  
  getFlightsByTail(tail) {
    return this.http.get('/flight/tail/' + tail);
  }
  
  getFlightsByDate(date) {
    return this.http.get('/flight/date/' + date);
  }
  
  newFlight(flightData) {
    return this.http.post('/flight/new', flightData);
  }
  
  updateFlight(flightData) {
    return this.http.put('/flight', flightData);
  }
  
  deleteFlight(id) {
    return this.http.delete('/flight/' + id);
  }
  
  getTransientFlights() {
    return this.http.get('/flight/transient');
  }
  
  getHangarRequests() {
    return this.http.get('/flight/requested');
  }
  
  getHangaredAircraft() {
    return this.http.get('/flight/hangared');
  }
  
  getPlanesByHangar(hangar) {
    return this.http.get('/plane/hangar/' + hangar);
  }
  
  getAllNotices() {
    return this.http.get('/notice');
  }
  
  submitNotice(notice) {
    return this.http.post('/notice', notice);
  }
  
  editNotice(notice) {
    return this.http.put('/notice', notice);
  }
  
  deleteNotice(id) {
    return this.http.delete('/notice/' + id);
  }

  getUser() {
    return this.http.get('/getUser');
  }
  
  logout() {
    return this.http.get('/logout');
  }
}
