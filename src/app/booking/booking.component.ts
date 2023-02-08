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

  bookingForm !: FormGroup

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private emitter: EmitterService
  ) {}


  services = servicesJson.services
  serviceNames: string[] = []
  options: string[] = []

  clientDetails!: Client

  // bookingForm = new FormGroup({
  //   fullName: new FormControl('', V.required),
  //   dob: new FormControl('', V.required),
  //   email: new FormControl('', [V.required, V.email]),
  //   phone: new FormControl('', V.required),
  //   zipCode: new FormControl('', V.required),
  //   city: new FormControl('', V.required),
  //   address: new FormControl('', V.required)
  // })



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
    // this.collectPersonalDetails()

    let data = {
      name: this.bookingForm.value.fullName,
      itemNumber: this.bookingForm.value.dob,
      quantity: this.bookingForm.value.email,
      price: this.bookingForm.value.phone
    }

    console.log("submit");
    
    this.api.addProducts(data).subscribe({
      next: (data:any) => {
        console.log(data.data); // sendResponse
      },
      error: err => {
        console.log("Hiba, nincs termek!");
      }
    })
  }

  ngOnInit(): void { 

    this.bookingForm = this.formBuilder.group({
      fullName: (''),
      dob: (''),
      email: (''),
      phone: ('')
    })


    // oninit fill dropdown with options
    for (let i=0; i<this.services.length; i++) {
      let serviceName:string = this.services[i].name
      this.serviceNames.push(serviceName)
      
      for (let j=0; j<this.services[i].variants.length; j++) {

        let option:string = this.services[i].variants[j].name
        this.options.push(option)

      }
    }

    // console.log(this.serviceNames);
    // console.log(this.options);

  }
}

interface Client {
  fullName: string,
  dob: string,
  email: string,
  phone: string,
  fullAddress: string
}