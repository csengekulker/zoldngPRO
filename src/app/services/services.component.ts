import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import servicesJson from './services.json'
import { Router } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  products!: any

  constructor(
    private api: ApiService,
    private router: Router
  ) { }

  book!:BookingComponent

  services!: any // JSON
  selectedService!: any

  fetchedServices !: any
  fetchedTypes!:any

  alttext: string = 'A kép leírása';

  //TODO: pass desired service details to booking
  // service id type id enough
  collectServiceDetails(event: any) {
    console.log(event.path);
    
    // let serviceId = event.path[7].childNodes[1].childNodes[1].innerHTML
    // let typeId = event.path[3].childNodes[3].innerHTML

    // let details = {
    //   serviceId: serviceId,
    //   typeId: typeId
    // }    

    // return details

  }

  onClick(event: any) {
    this.selectedService = this.collectServiceDetails(event)

    this.router.navigate(['/booking'])

    console.log(this.selectedService);

  }

  ngOnInit(): void {    
    this.services = servicesJson.services

    this.api.fetchServices().subscribe({
        next: (data:any) => {
          this.fetchedServices = data.data
          for(let i = 0; i < this.fetchedServices.length; i++) {
            this.services[i].id = this.fetchedServices[i].id
            this.services[i].name = this.fetchedServices[i].name
            
          }
        },
        error: (err:any) => {
          console.log("Hiba, nincs adat!");
        }
    })

    this.api.fetchTypes().subscribe({
      next: (data:any) => {
        this.fetchedTypes = data.data
      },
      error: (err:any) => {
        console.log("Hiba, nincs adat!");
      }
  })

  }

}

