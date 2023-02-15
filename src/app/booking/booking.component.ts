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
  services = servicesJson.services
  serviceNames: string[] = []
  serviceOptions !: [][]

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

    // collect duration
    // filter all apts through it for fit
    // create list of availables
    // in template: for each available, make button
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

    //fetch all isOpen-true apts
    this.api.fetchApts().subscribe({
      next: (data: any) => {
        this.appointments = data.data
        console.log(this.appointments);
        
      },
      error: (err: any) => {
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
      address: ['', V.required]
    })

    this.services.forEach(service => {

      this.serviceNames.push(service.name)

      let options = []


      for (let variant of service.variants) {

        let option:Option =  {
          name: service.name,
          details: {
            type: variant.name,
            duration: Number(variant.duration),
            price: Number(variant.cost)
          }

        }

        options.push(option) 
        // this.serviceOptions.push(options)

      }
      console.log(options);
    });
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