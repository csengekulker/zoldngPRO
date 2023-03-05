import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchApts() {
    let endpoint = 'appointments'
    let url = environment.apihost + endpoint

    return this.http.get<any>(url)
  }

  fetchOpenApts() {
    let endpoint = 'appointments/open'
    let url = environment.apihost + endpoint

    return this.http.get<any>(url)
  }

  fetchServices() {
    let endpoint = 'services'
    let url = environment.apihost + endpoint

    return this.http.get<any>(url)
  }

  fetchTypes() {
    let endpoint = 'types'
    let url = environment.apihost + endpoint

    return this.http.get<any>(url)
  }

  sendMessageDetails(message: any) {
    let endpoint = 'messages'
    let url = environment.apihost + endpoint

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
    let url = environment.apihost + endpoint

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {
      headers: headers
    };
    
    return this.http.post<any>(url, booking, httpOption)
  }

  sendClientDetails(client: Client) {
    let endpoint = 'clients'
    let url = environment.apihost + endpoint

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {
      headers: headers
    };
    
    return this.http.post<any>(url, client, httpOption)
  }

}

interface Client {
  fullName: string,
  dob: string,
  email: string,
  phone: string,
  fullAddress: string
}

interface Booking {
  service: {
    serviceId: number,
    typeId: number
  },
  client: Client,
  appointmentId: number
}
