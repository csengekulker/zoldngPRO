import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators as V } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmitterService } from '../emitter.service';
import servicesJson from '../services/services.json'

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private emitter: EmitterService
  ) { }

  bookingForm !: FormGroup
  appointments !: any
  services !: any
  serviceNames: string[] = []
  serviceOptions !: Option[]

  clientDetails!: Client

  collectPersonalDetails(): Client {

    const target = this.bookingForm.value

    let fullName: string = target.fullName!
    let dob: string = target.dob!
    let email: string = target.email!
    let phone: string = target.phone!
    let zipCode = target.zipCode
    let city = target.city
    let address = target.address

    if (
      zipCode == '' ||
      city == '' ||
      address == ''
    ) {
      alert("Ki nem toltott mezo!!");

    }

    let fullAddress = `${zipCode} ${city}, ${address}`

    let data: Client = {
      fullName,
      dob: dob,
      email,
      phone,
      fullAddress
    }

    return data
  }

  collectServiceDetails(): Option {

    // mocking!
    let data: Option = {
      name: 'Svedmasszazs',
      details: {
        type: 'teljes test',
        duration: 90,
        price: 2000
      }

    }

    return data
  }

  optionSelected(event: any) {

  console.log('Service id: ' + event.target.value);
      

    // collect duration
    // filter all apts through it for fit
    // create list of availables
    // in template: for each available, make button
  }

  aptSelected(event: any) {
    console.log(event.target.value);
    
  }

  onSubmit() {
    let clientData = this.collectPersonalDetails()
    let serviceData = this.collectServiceDetails()

    let bookingData: Booking = {
      service: serviceData,
      client: clientData
    }

    this.api.sendReservation(bookingData).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    this.api.sendClientDetails(clientData).subscribe({
      next: (data: any) => {
        console.log(data);
      },
      error: (err: any) => {
        console.log(err)
      }
    })
  }

  ngOnInit(): void {

    this.api.fetchOpenApts().subscribe({
      next: (data: any) => {
        this.appointments = data.data
        console.log(this.appointments);
        
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    this.api.fetchServices().subscribe({
      next: (data:any) => {
        this.services = data
        console.log(this.services)
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })



    //TODO: refactor
    this.bookingForm = this.formBuilder.group({
      fullName: ['', V.required],
      dob: ['', V.required],
      email: ['', [V.required, V.email]],
      phone: ['', V.required],
      zipCode: ['', V.required],
      city: ['', V.required],
      address: ['', V.required],
      accept: [V.requiredTrue]
    })

  }
}

interface Option {
  name: string,
  details: {
    type: string,
    duration: number,
    price: number
  }

}

interface Client {
  fullName: string,
  dob: string,
  email: string,
  phone: string,
  fullAddress: string
}

interface Booking {
  service: Option,
  client: Client
}

interface Appointment {
  date: string,
  hour: number,
  min: number,
  isOpen: boolean
}