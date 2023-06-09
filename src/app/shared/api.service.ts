import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { Message } from '../models/Message';
import { Booking } from '../models/Booking';
import { Client } from '../models/Client';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

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

  fetchServices() {
    let endpoint = 'services'
    let url = env.apihost + endpoint

    return this.http.get<any>(url)
  }

  fetchServiceById(id:number) {
    let endpoint = 'services/' + id
    let url = env.apihost + endpoint

    return this.http.get<any>(url)
  }

  fetchTypes() {
    let endpoint = 'types'
    let url = env.apihost + endpoint

    return this.http.get<any>(url)
  }

  fetchTypeById(id: number) {
    let endpoint = "types/" + id
    let url = env.apihost + endpoint

    return this.http.get<any>(url)
  }

  fetchBookingById(id:number) {
    let endpoint = `bookings/${id}`
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

  sendReservation(booking: Booking) {
    let endpoint = 'bookings'
    let url = env.apihost + endpoint

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {
      headers: headers
    };
    
    return this.http.post<any>(url, booking, httpOption)
  }

  getReservationDetails(id:number) {
    let endpoint = `bookings/${id}`
    let url = env.apihost + endpoint

    return this.http.get<any>(url)
  }

  sendClientDetails(client: Client) {
    let endpoint = 'clients'
    let url = env.apihost + endpoint

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {
      headers: headers
    };
    
    return this.http.post<any>(url, client, httpOption)
  }



}


