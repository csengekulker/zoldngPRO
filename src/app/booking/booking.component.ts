import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators as V } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmitterService } from '../emitter.service';
import servicesJson from '../services/services.json'
import { Target } from '@angular/compiler';

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
  types !: any
  aptId!:number
  // serviceNames: string[] = []
  // serviceOptions !: Option[]

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

  serviceSelected(event: any) {
    console.log('Service id: ' + event.target.value);
  }

  typeSelected(event:any) {
    console.log('Type id:' + event.target.value);
  }

  aptSelected(event: any) {
    console.log('Appointment id: ' + event.target.id);
    this.aptId = event.target.id

  }

  onSubmit() {

    const target = this.bookingForm.value

    let serviceId = target.serviceId
    let typeId = target.typeId
    let aptId = this.aptId    

    let clientData = this.collectPersonalDetails()

    let bookingData: Booking = {
      service: {
        serviceId: serviceId,
        typeId: typeId
      },
      client: clientData,
      appointmentId: aptId
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
        console.log(data.data);
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
      next: (data: any) => {
        this.services = data.data
        console.log(this.services)
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    this.api.fetchTypes().subscribe({
      next: (data: any) => {
        this.types = data.data
        console.log(this.types)
      },
      error: (err: any) => {
        console.log(err);
      }
    })



    //TODO: refactor
    this.bookingForm = this.formBuilder.group({
      serviceId: [V.required],
      typeId: [V.required],
      aptId: [V.required],
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


interface Client {
  fullName: string,
  dob: string,
  email: string,
  phone: string,
  fullAddress: string
}

interface Booking {
  service: {
    serviceId: number,
    typeId: number
  },
  client: Client,
  appointmentId: number
}
