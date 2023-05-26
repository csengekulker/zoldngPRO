import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login(email: string, pass: string) {

    let authData = {
      email: email,
      pass: pass
    }

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }

    let url = environment.apihost + 'login';
    return this.http.post<any>(url, authData, httpOptions);
  }

  isLoggedIn() {
    if (localStorage.getItem('userData') === null) {
      return false;
    }
    let data: any = localStorage.getItem('userData');
    let userData = JSON.parse(data);
    let token = userData.data.token;
    return token;
  }

  logout() {
    if(localStorage.getItem('userData') === null) {
      return;
    }
    let data:any = localStorage.getItem('userData');
    // localStorage.removeItem('userData');
    let userData = JSON.parse(data)
    let token = userData.token;
    // console.log(userData.data.name);
    // return;
    
    

    let httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + userData.data.token
      })
    };
    let url = environment.apihost + 'logout';

    return this.http.post<any>(url, '', httpOptions).subscribe({
      next: (data:any) => {
        console.log(data);
        localStorage.removeItem('userData');
        this.router.navigate(['login'])
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })
  }


}
