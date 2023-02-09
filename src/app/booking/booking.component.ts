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

  bookingForm !: FormGroup

  constructor(
    private api: ApiService,
    private formBuilder: FormBuilder,
    private emitter: EmitterService
  ) { }


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

  collectPersonalDetails(): Client {

    const target = this.bookingForm.value

    let fullName: string = target.fullName!
    let dob: string = target.dob!
    let email: string = target.email!
    let phone: string = target.phone!
    let zipCode = target.zipCode
    let city = target.city
    let address = target.address

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

  optionChanged(event: any) {
    console.log(event.target.value);

  }

  onSubmit() {
    let clientData = this.collectPersonalDetails()

    console.log("submitted");

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

    //TODO: refactor
    this.bookingForm = this.formBuilder.group({
      fullName: ['', V.required],
      dob: ['', V.required],
      email: (''),
      phone: (''),
      zipCode: (''),
      city: (''),
      address: ('')
    })


    //FIXME: oninit fill dropdown with options
    for (let i = 0; i < this.services.length; i++) {
      let serviceName: string = this.services[i].name
      this.serviceNames.push(serviceName)

      for (let j = 0; j < this.services[i].variants.length; j++) {

        let option: string = this.services[i].variants[j].name
        this.options.push(option)

      }
    }

  }
}

interface Client {
  fullName: string,
  dob: string,
  email: string,
  phone: string,
  fullAddress: string
}