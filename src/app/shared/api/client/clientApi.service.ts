import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ClientApiService {
    constructor(private http: HttpClient) { }

    fetchClients() {
        let endpoint = 'clients'
        let url = env.apihost + endpoint

        return this.http.get<any>(url)
    }

    fetchClientById(id: number) {
        let endpoint = 'clients/' + id
        let url = env.apihost + endpoint

        return this.http.get<any>(url)
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
        let url = env.apihost + endpoint;

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
        let url = env.apihost + endpoint + '/' + client.id;

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
        let url = env.apihost + endpoint + '/' + id;
        return this.http.delete<any>(url, httpOptions);
    }
}