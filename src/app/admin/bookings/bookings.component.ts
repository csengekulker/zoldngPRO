import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.scss']
})
export class BookingsComponent implements OnInit {

  bookings!:any

  constructor(private api: ApiService) { }

  ngOnInit():void {
    this.api.fetchBookings().subscribe({
      next: (data:any) => {
        console.log(data);
        this.bookings = data
        
      },
      error: (e:any) => {
        console.log(e);
        
      }
    })
  }
}
