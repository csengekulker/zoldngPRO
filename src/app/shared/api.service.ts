import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  sendClientDetails(data: any) {
    let endpoint = 'clients'
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

  getProducts() {
    let endpoint = 'products'
    let url = environment.apihost + endpoint

    console.log('GET:' + url);
  
    return this.http.get<any>(url)
  }

  addProducts(data: any) {
    let endpoint = 'products';
    let url = environment.apihost + endpoint;

    let headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    let httpOption = {
      headers: headers
    };

    console.log('POST:' + url);
    console.log(data);

    return this.http.post<any>(url, data, httpOption);
  }
}