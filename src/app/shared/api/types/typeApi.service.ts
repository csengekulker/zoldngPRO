import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export default class TypeApiService {


    constructor(private http: HttpClient) { }

    fetchTypes() {
        let url = `${env.apihost}types`

        return this.http.get<any>(url)
    }

    fetchTypeById(id: number) {
        let url = `${env.apihost}types/${id}`

        return this.http.get<any>(url)
    }

    // admin only
    addType() { }

    //admin only
    updateType() { }

    //admin only
    deleteType() { }


}