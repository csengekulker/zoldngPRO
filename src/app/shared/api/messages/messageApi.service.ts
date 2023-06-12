import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Message } from 'src/app/models';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export default class MessageApiService {
    constructor(private http: HttpClient) { }

    fetchMessages() {
        let url = env.apihost + 'messages'

        let userData = <string>localStorage.getItem('userData')
        let data = JSON.parse(userData)


        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + data.data.token
            })
        }

        return this.http.get<any>(url, httpOptions)
    }

    fetchMessageById(id: number) {
        let endpoint = 'messages/' + id
        let url = env.apihost + endpoint

        return this.http.get<Message>(url)
    }

    sendReplyEmail() { }


    deleteMessage(id: number) {
        let url = `${env.apihost}messages/${id}`

        let userData = <string>localStorage.getItem('userData')
        let data = JSON.parse(userData)

        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + data.data.token
            })
        }

        return this.http.delete<any>(url, httpOptions);
    }
}