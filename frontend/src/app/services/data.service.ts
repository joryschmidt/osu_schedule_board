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
  
  getBasedPlanes() {
    return this.http.get('/plane/based');
  }
}
