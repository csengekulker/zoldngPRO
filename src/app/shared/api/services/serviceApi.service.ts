import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export default class ServiceApiService {


    constructor(private http: HttpClient) { }

    fetchServices() {
        let url = `${env.apihost}services`

        return this.http.get<any>(url)
    }
    
    fetchServiceById(id:number) {
        let url = `${env.apihost}services/${id}`
    
        return this.http.get<any>(url)
      }

    // admin only
    addService() {}

    //admin only
    updateService() {}

    //admin only
    deleteService() {}

 
}