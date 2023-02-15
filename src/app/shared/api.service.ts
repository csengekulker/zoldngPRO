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

  sendMessageDetails(data: any) {
    //TODO: include id
    //TODO: messageController - email client?
    let endpoint = 'messages'
    let url = environment.apihost + endpoint

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {
      headers: headers
    };

    console.log(data);
    
    return this.http.post<any>(url, data, httpOption)
  }

  sendReservation(data: any) {
    let endpoint = 'bookings'
    let url = environment.apihost + endpoint

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {
      headers: headers
    };

    console.log(data);
    
    return this.http.post<any>(url, data, httpOption)
  }

  sendClientDetails(data: any) {
    let endpoint = 'clients'
    let url = environment.apihost + endpoint

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {
      headers: headers
    };
    
    return this.http.post<any>(url, data, httpOption)
  }

}