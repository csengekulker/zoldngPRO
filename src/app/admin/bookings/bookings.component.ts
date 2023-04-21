import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';
import { BookingApiService } from 'src/app/shared/api/booking/bookingApi.service';
import { ClientApiService } from 'src/app/shared/api/client/clientApi.service';

@Component({
  selector: 'admin-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  bookings!:any
  approved!:any
  status!:boolean

  constructor(
    private api: BookingApiService, 
    private clientApi: ClientApiService,
    // TODO: implement service and typeapi
    private generalApi: ApiService
  ) { }

  filterBookings(isApproved: boolean) {
  }

  approve(id:number) {
    this.api.approveBooking(id).subscribe({
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
    this.api.fetchBookings().subscribe({
      next: (data:any) => {
        data.forEach((book:any) => {
          this.clientApi.fetchClientById(book.client_id).subscribe({
            next: (client:any) => book.client = client.data.fullName
          })
          this.generalApi.fetchServiceById(book.service_id).subscribe({
            next: (service: any) => book.service = service.data.name
          })
          this.generalApi.fetchTypeById(book.type_id).subscribe({
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
