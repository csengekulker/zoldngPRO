import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

    login(email: string, pass: string) {
    const authData = {
      email: email,
      password: pass
    }
    let httpHeaders = new HttpHeaders();
    httpHeaders.set('Content-Type', 'application/json');
    const httpOptions = {
      headers: httpHeaders
    }
    let endpoint = 'login';
    let url = environment.apihost + endpoint;
    return this.http.post<any>(url, authData, httpOptions);
  }
}
