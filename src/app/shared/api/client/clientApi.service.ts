import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from 'src/app/models';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export default class ClientApiService {
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

    sendClientDetails(client: Client) {
        let endpoint = 'clients'
        let url = env.apihost + endpoint
    
        let headers = new HttpHeaders({
          'Content-Type': 'application/json'
        });
    
        let httpOption = {
          headers: headers
        };
        
        return this.http.post<any>(url, client, httpOption)
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