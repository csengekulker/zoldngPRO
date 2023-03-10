import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators as V } from '@angular/forms';
import { ApiService } from '../shared/api.service';

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

  bookingForm!: FormGroup

  static assignService(service:any) {
    console.log(service.serviceId, service.typeId); //ideert

  }


  appointments !: any
  fitAppointments: any[] = []
  services !: any
  types !: any
  contents!: any

  aptId!:number
  pickedType:any = ''
  noApts!:any

  dates:any[] = []
  distinctDates:string[] = []

  clientDetails!: any

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

  typePicked(event:any) {

    this.fitAppointments = []

    let typeId = event.target.value - 1
    this.pickedType = this.types[typeId] 

    this.appointments.forEach((apt:any) => {

      apt.date = apt.date.replaceAll('-', '. ')
      this.dates.push(apt.date)

      this.distinctDates = this.dates.filter((n, i) => this.dates.indexOf(n) === i)

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


  datePicked(event:any) {
    this.noApts = ''
    
    event.target.classList.add('active')
        console.log(event.target.classList.value);

    let buttonId = event.target.innerHTML
    console.log(buttonId);

    let dateButtons = document.querySelectorAll('.date')
    
    dateButtons.forEach(button => {  
      console.log(button);
//ITT VAN valahol :)
      // if (!(buttonId == button.innerHTML)) {
      //   button.classList.remove('active')
        
      // }
    })

    this.contents = []

    this.fitAppointments.forEach((apt:any) => {
      if (apt.date == buttonId) {
        this.contents.push(apt)
      }
    })

    console.log('Aznap:', this.contents);
        
    if (this.contents.length == 0) {
      this.noApts = "A kivalasztott napon nincs idopont."      
    }
  }

  timePicked(event: any) {

    let buttonId = event.target.id
    let aptId = event.target.value
    console.log('Apt Id:',aptId);
    this.aptId = aptId
    
    document.querySelectorAll('.apt').forEach(button => {
      if (!(button.id == buttonId)) {
        button.classList.remove('active')
      } 
    })
  }

  onSubmit() {
    const target = this.bookingForm.value   

    let clientData = this.collectPersonalDetails()    

    this.api.sendClientDetails(clientData).subscribe({
      next: (data: any) => {
        let clientId = data.data.id

        if (data.success) {

          let bookingData = {
            service_id: target.serviceId,
            type_id: target.typeId,
            client_id: clientId, 
            appointment_id: this.aptId
          }
          
          this.api.sendReservation(bookingData).subscribe({
            next: (data:any) => {
              if (data.success) {
                alert(data.message)
              }              
            },
            error: (err:any) => {
              console.log(err)
            }
          })
        }
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
        console.log('Open:', this.appointments);
        
        this.appointments.forEach((apt:any) => {
          apt.start = apt.start.substring(0, 5)
          apt.end = apt.end.substring(0, 5)          
        });
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


