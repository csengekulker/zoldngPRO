import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit{

  bookings: any
  bookingForm !: FormGroup

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private emitter: EmitterService
  ) {}

  formSubmit() {}

  receiveDetails() {
    
  }

  ngOnInit(): void {
    this.bookingForm = this.formBuilder.group({
      fullName: [''],
      dob: [''],
      email: [''],
      phone: [''],
      zipcode: [''],
      city: [''],
      address: ['']

    })
  }



}
