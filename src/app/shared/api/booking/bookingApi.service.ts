import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class BookingApiService {

    constructor(private http: HttpClient) { }


    fetchBookings() {
        let url = env.apihost + 'bookings'

        let userData = <string> localStorage.getItem('userData')
        let data = JSON.parse(userData)
        

        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + data.data.token
            })
        }
    
        return this.http.get<any>(url, httpOptions)
    }

    addBookingManually(booking: any) {
        let jsonUserData: any = localStorage.getItem('userData');
        let userData = JSON.parse(jsonUserData);

        let httpHeaders = new HttpHeaders()
            .set('Authorization', `none`);

        const httpOptions = {
            headers: httpHeaders
        }
        let endpoint = 'bookings';
        let url = env.apihost + endpoint;

        return this.http.post<any>(url, booking, httpOptions);
    }

    approveBooking(id: number) {
        let endpoint = 'bookings/approve/' + id
        let url = env.apihost + endpoint
        
        let userData = <string> localStorage.getItem('userData')
        let data = JSON.parse(userData)
        

        let httpOptions = {
            headers: new HttpHeaders({
                'Authorization': 'Bearer ' + data.data.token
            })
        }


        return this.http.put(url, httpOptions)
    }

    updateBookingDetails(id: number) {
        // TODO: inform client about changes
    }

    delBooking(id: number) {
        // TODO: inform client about deletion
        
    }
}