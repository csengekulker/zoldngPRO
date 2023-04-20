import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AppointmentApiService {

  constructor(private http: HttpClient) { }

  fetchApts() {
    let endpoint = 'appointments'
    let url = env.apihost + endpoint

    return this.http.get<any>(url)
  }

  fetchOpenApts() {
    let endpoint = 'appointments/open'
    let url = env.apihost + endpoint

    return this.http.get<any>(url)
  }

  addAppointmentManually() {}

  fillCalendar() {}

  modifyAppointment() {
    // only OPEN ones, not assigned to client
  } 

  deleteAppointment() {}




}
