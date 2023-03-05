import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators as V } from '@angular/forms';
import { ApiService } from '../shared/api.service';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
  ) { }

  bookingForm !: FormGroup
  appointments !: any
  fitAppointments: any[] = []
  services !: any
  types !: any
  aptId!:number
  pickedType:any = ''
  selectedService!:any

  clientDetails!: Client

  collectPersonalDetails(): any {

    const target = this.bookingForm.value

    let fullName: string = target.fullName!
    let dob: string = target.dob!
    let email: string = target.email!
    let phone: string = target.phone!
    let zipCode: number = target.zipCode!
    let city: string = target.city!
    let address:string = target.address!

    let fullAddress = `${zipCode} ${city}, ${address}`

    let data = {
      fullName,
      dob: dob,
      email,
      phone,
      fullAddress
    }

    return data
  }

  serviceSelect(event: any) {
    console.log('Service id: ' + event.target.value);

  }

  typeSelect(event:any) {

    this.fitAppointments = []

    console.log('Type id:' + event.target.value);
    let typeId = event.target.value - 1
    this.pickedType = this.types[typeId] 

    this.appointments.forEach((apt:any) => {

      let start = apt.start.split(':')
      let startHour = Number(start[0])

      let end = apt.end.split(':')
      let endHour = Number(end[0])

      let startMin = Number(start[1])
      let endMin = Number(end[1])

      let minDiff = endMin - startMin

      let aptDuration = ((endHour - startHour)*60) + minDiff

      if (aptDuration >= this.pickedType.duration) {
        this.fitAppointments.push(apt)
      }

    });
    
  }

  aptSelect(event: any) {
    console.log('Appointment id: ' + event.target.value);
    this.aptId = event.target.value
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

    // console.log(this.selectedService);    

    this.api.fetchOpenApts().subscribe({
      next: (data: any) => {
        this.appointments = data.data
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    this.api.fetchServices().subscribe({
      next: (data: any) => {
        this.services = data.data
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    this.api.fetchTypes().subscribe({
      next: (data: any) => {
        this.types = data.data
      },
      error: (err: any) => {
        console.log(err);
      }
    })

    // let dateRegEx = new RegExp(/^\d{4}\-(0[1-9]|1[012])\-(0[1-9]|[12][0-9]|3[01])$/)

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
  client: {
    fullName: string,
    dob: string,
    email: string,
    phone: string,
    fullAddress: string
  },
  appointmentId: number
}
