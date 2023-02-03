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
export class BookingComponent implements OnInit{

  services = servicesJson.services
  serviceNames: string[] = []
  options: string[] = []

  clientDetails!: Client

  bookingForm = new FormGroup({
    fullName: new FormControl('', V.required),
    dob: new FormControl('', V.required),
    email: new FormControl('', [V.required, V.email]),
    phone: new FormControl('', V.required),
    zipCode: new FormControl('', V.required),
    city: new FormControl('', V.required),
    address: new FormControl('', V.required)
  })

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private emitter: EmitterService
  ) {}

  collectPersonalDetails() {

    const target = this.bookingForm.value

    let fullName:string = target.fullName!
    let dob:string = target.dob!
    let email:string = target.email!
    let phone:string = target.phone!
    let zipCode = target.zipCode
    let city = target.city
    let address = target.address

    let fullAddress = `${zipCode} ${city}, ${address}`

    this.clientDetails = {
      fullName,
      dob: dob,
      email,
      phone,
      fullAddress
    }

    console.log(this.clientDetails);
    
  }

  optionChanged(event: any) {
    console.log(event.target.value);
    
  }

  onSubmit() {
    this.collectPersonalDetails()
  }

  ngOnInit(): void { 
    for (let i=0; i<this.services.length; i++) {
      let serviceName:string = this.services[i].name
      this.serviceNames.push(serviceName)
      
      for (let j=0; j<this.services[i].variants.length; j++) {

        let option:string = this.services[i].variants[j].name
        this.options.push(option)

      }
    }

    console.log(this.serviceNames);
    console.log(this.options);

  }
}

interface Client {
  fullName: string,
  dob: string,
  email: string,
  phone: string,
  fullAddress: string
}