import { Component, OnInit } from '@angular/core';
import {
  BookingApiService,
  ClientApiService,
  ServiceApiService,
  TypeApiService,
  ApiService
} from '../../shared/api'

@Component({
  selector: 'admin-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export default class BookingsComponent implements OnInit {

  bookings!:any
  approved!:any
  status!:boolean

  constructor(
    private bookingApi: BookingApiService, 
    private clientApi: ClientApiService,
    private serviceApi: ServiceApiService,
    private typeApi: TypeApiService,
    private api: ApiService
  ) { }

  filterBookings(isApproved: boolean) {
  }

  approve(id:number) {
    this.bookingApi.approveBooking(id).subscribe({
      next: (data:any) => {
        console.log('approved')
      }
    })
  }


  loadClient(id:number) {
    // TODO: in modal, load details
    console.log(id);
    
  }

  fetchBookings() {
    this.bookingApi.fetchBookings().subscribe({
      next: (data:any) => {
        data.forEach((book:any) => {
          this.clientApi.fetchClientById(book.client_id).subscribe({
            next: (client:any) => book.client = client.data.fullName
          })
          this.serviceApi.fetchServiceById(book.service_id).subscribe({
            next: (service: any) => book.service = service.data.name
          })
          this.typeApi.fetchTypeById(book.type_id).subscribe({
            next: (type:any) => book.type = type.name
          })
          
        }) 
        this.bookings = data       
      },
      error: (e:any) => console.log(e)
    })
  }

  ngOnInit():void {

    this.fetchBookings()

    console.log(this.bookings);
    

  }
}
