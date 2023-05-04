import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class MessageApiService {
    constructor(private http: HttpClient) { }

    fetchMessages() {
        let endpoint = 'messages'
        let url = env.apihost + endpoint

        return this.http.get<any>(url)
    }

    fetchMessageById(id: number) {
        let endpoint = 'messages/' + id
        let url = env.apihost + endpoint

        return this.http.get<any>(url)
    }

    sendReplyEmail() { }


    deleteMessage(id: number) {  }
}