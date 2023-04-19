import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  fetchClients() {
    let endpoint = 'clients'
    let url = environment.apihost + endpoint

    return this.http.get<any>(url)
  }

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

  fetchBookingById(id:number) {
    let endpoint = `bookings/${id}`
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

  getReservationDetails(id:number) {
    let endpoint = `bookings/${id}`
    let url = environment.apihost + endpoint

    return this.http.get<any>(url)
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

  addClient(client: any) {
    let jsonUserData: any = localStorage.getItem('userData');
    let userData = JSON.parse(jsonUserData);
 
    let httpHeaders = new HttpHeaders()
    .set('Authorization', `none`);
 
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'clients';
    let url = environment.apihost + endpoint;
 
    return this.http.post<any>(url, client, httpOptions);
  }

  updateClient(client: any) {
    // let jsonUserData: any = localStorage.getItem('userData');
    // let userData = JSON.parse(jsonUserData);
 
    let httpHeaders = new HttpHeaders()
    .set('Authorization', `none`);
 
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'clients';
    let url = environment.apihost + endpoint + '/' + client.id;
 
    return this.http.put<any>(url, client, httpOptions);
  }

  delClient(id: number) {
    // let jsonUserData: any = localStorage.getItem('userData');
    // let userData = JSON.parse(jsonUserData);  
    let httpHeaders = new HttpHeaders()
    .set('Authorization', `none`);
    const httpOptions = {
      headers: httpHeaders
    }
 
    let endpoint = 'clients';
    let url = environment.apihost + endpoint + '/' + id;
    return this.http.delete<any>(url, httpOptions);    
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
  service_id: number,
  type_id: number
  client_id: number,
  appointment_id: number
}
