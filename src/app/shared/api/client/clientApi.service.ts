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

        let userData = <string> localStorage.getItem('userData')
        let data = JSON.parse(userData)
        

        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + data.data.token
            })
        }

        return this.http.get<any>(url, httpOptions)
    }

    addClient(client: any) {
        let url = env.apihost + 'clients';

        let userData = <string> localStorage.getItem('userData')
        let data = JSON.parse(userData)
        

        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + data.data.token
            })
        }

        return this.http.post<any>(url, client, httpOptions);
    }

    updateClient(client: any) {
        let url = `${env.apihost}clients/${client.id}`

        let userData = <string> localStorage.getItem('userData')
        let data = JSON.parse(userData)
        

        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + data.data.token
            })
        }

        return this.http.put<any>(url, client, httpOptions);
    }

    delClient(id: number) {
        let url = `${env.apihost}clients/${id}`

        let userData = <string> localStorage.getItem('userData')
        let data = JSON.parse(userData)
        

        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + data.data.token
            })
        }

        return this.http.delete<any>(url, httpOptions);
    }
}