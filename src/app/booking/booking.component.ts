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
  serviceOptions: string[] = []

  name !: string

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

    if (
      zipCode == '' ||
      city == '' ||
      address == ''
    ) {
      alert("Ki nem toltott mezo!!");
      
    }

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
    this.name = "Sved"
    console.log(event.path[0].childNodes[1].label);
    

    console.log(this.name + event.target.value);
    

  }

  onSubmit() {
    let clientData = this.collectPersonalDetails()

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

    this.services.forEach(service => {
      let serviceName: string = service.name
      this.serviceNames.push(serviceName)


      for(let variant of service.variants) {
        let option = variant.name
        this.serviceOptions.push(option)
      }

      console.log(this.serviceOptions);

    });

    console.log(this.serviceNames);


  }
}

interface Client {
  fullName: string,
  dob: string,
  email: string,
  phone: string,
  fullAddress: string
}