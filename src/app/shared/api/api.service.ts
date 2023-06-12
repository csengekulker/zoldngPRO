import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Message } from '../../models';


@Injectable({
  providedIn: 'root'
})
export default class ApiService {

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

  sendMessageDetails(message: Message) {
    let endpoint = 'messages'
    let url = env.apihost + endpoint

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {
      headers: headers
    };

    return this.http.post<any>(url, message, httpOption)
  }



  getReservationDetails(id:number) {
    let endpoint = `bookings/${id}`
    let url = env.apihost + endpoint

    return this.http.get<any>(url)
  }





}


