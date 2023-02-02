import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getProducts() {
    let endpoint = 'products'
    let url = environment.apihost + endpoint

    console.log('GET:' + url);
  

    return this.http.get<any>(url)
  }

  addProducts(data: any) {
    let endpoint = 'products';
    let url = environment.apihost + endpoint;

    let token = localStorage.getItem('token');

    console.log(data);
    
    
    // same as my object arrays 
    let data2 = {
      name: "eger",
      itemNumber: "cab34",
      count: 25,
      price: 80
    };

    let headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'none'
    });

    let httpOption = {
      headers: headers
    };
    return this.http.post<any>(url, data, httpOption);
  }
}