import { TranslationWidth } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators as V } from '@angular/forms';
import { EmitterService } from 'src/app/emitter.service';
import { ApiService } from 'src/app/shared/api.service';
import { PassService } from 'src/app/shared/pass.service';

@Component({
  selector: 'booking-form',
  templateUrl: './form.component.html',
  styleUrls: ['../booking.component.scss']
})
export class FormComponent implements OnInit {

  constructor(
    private api: ApiService,
    private pass: PassService,
    private emitter: EmitterService,
    private form: FormBuilder) { }

  selectService!:any
  selectType!:any

  services!: any; types!: any
  bookingForm!: FormGroup
  appointments!: any
  fitAppointments: any[] = []

  aptId!: number
  pickedType: any = ''
  pickedService:any = ''
  pickedApt:any = ''
  bookingId!:number

  autoSelect() {
    console.log('autoselect fired');
    
    // this.pickedType = ''
    this.pass.currentService.subscribe({
      next: (sid:number) => {
        this.selectService = sid
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })

    this.pass.currentType.subscribe({
      next: (tid:number) => {
        this.selectType = tid
        console.log('type id', tid);
        this.typePicked(tid - 1)
        
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })
  }

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
      dob,
      email,
      phone,
      fullAddress
    }

    return data
  }

  filterApts() {

    this.appointments.forEach((apt: any) => {
      let start = apt.start.split(':')
      let startHour = Number(start[0])

      let end = apt.end.split(':')
      let endHour = Number(end[0])

      let startMin = Number(start[1])
      let endMin = Number(end[1])

      let minDiff = endMin - startMin

      let aptDuration = ((endHour - startHour) * 60) + minDiff

      if (aptDuration >= this.pickedType.duration) {
        this.fitAppointments.push(apt)
      }

    });

    this.fitAppointments.forEach((apt: any) => {
    })
  }

  servicePicked(event:any) {
    this.pickedService = this.services[event.target.value - 1]
    
  }

  typePicked(event?: any, id?:number) {    

    this.fitAppointments = []
    // console.log('typeid', event.target.value -1);
    
    if (event != undefined) {
      this.pickedType = this.types[event.target.value - 1]

    } else if (id) {
      console.log(id);
      this.pickedType = this.types[id]
      
    }
    this.filterApts()

  }

  aptPicked(event:any) {

    this.pickedApt = this.fitAppointments[this.bookingForm.value.aptId - 1]
    console.log(this.pickedApt);
    
    
  }

  fetchBookingById(id:number) {
    this.api.fetchBookingById(id).subscribe({
      next: (data:any) => {
        // console.log(data);
        if (data.success) {
          alert("Sikeres foglalás")
          this.bookingForm.reset()
        }
        
      },
      error: (err:any) => {
        console.log(err);
        
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
            appointment_id: target.aptId
          } 
          
          this.api.sendReservation(bookingData).subscribe({
            next: (data:any) => {
              if (data.success) {
                this.bookingId = data.data.id
                this.fetchBookingById(this.bookingId)
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

  fetchOpenApts(): any {
    this.api.fetchOpenApts().subscribe({
      next: (data: any) => {
        let appointments = data.data

        return appointments
      }
    })
  }

  ngOnInit(): void {
    this.autoSelect()

    this.emitter.event.subscribe(() => {
      this.autoSelect()
    })

    this.api.fetchOpenApts().subscribe({
      next: (data: any) => {
        this.appointments = data.data

        this.appointments.forEach((apt: any) => {
          apt.date = apt.date.replaceAll('-', '. ')
          apt.start = apt.start.substring(0, 5)
          apt.end = apt.end.substring(0, 5)
        })
        console.log('Open:', this.appointments);
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

    this.bookingForm = this.form.group({
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
      accept: [false, V.requiredTrue]
    })
  }

}
