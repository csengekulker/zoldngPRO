import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { EmitterService } from '../emitter.service';
import servicesJson from './services.json'

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  products!: any

  constructor(
    private api: ApiService,
    private emitter: EmitterService
  ) { }

  services!: any // JSON

  fetchedServices !: any
  fetchedTypes!:any

  path: string = '../assets/images/vert.png';
  alttext: string = 'A kép leírása';

  //TODO: pass desired service details to booking
  collectServiceDetails(event: any): Object {
    let name = event.path[7].childNodes[1].childNodes[0].innerHTML
    let type = event.path[3].childNodes[0].childNodes[0].nodeValue
    let duration = event.path[3].childNodes[1].childNodes[0].nodeValue
    let price = event.path[3].childNodes[2].childNodes[0].nodeValue

    let details = {
      name: name,
      type: type,
      duration: duration,
      price: price
    }

    return details

  }

  onClick(event: any) {
    let details = this.collectServiceDetails(event)

    console.log(details);

    // this.api.provideServiceDetails(details)

  }

  ngOnInit(): void {

    this.services = servicesJson.services

    this.api.fetchServices().subscribe({
        next: (data:any) => {
          this.fetchedServices = data.data
          console.log(data.data); 
        },
        error: (err:any) => {
          console.log("Hiba, nincs adat!");
        }
    })

    this.api.fetchTypes().subscribe({
      next: (data:any) => {
        this.fetchedTypes = data.data
        console.log(data.data); 
      },
      error: (err:any) => {
        console.log("Hiba, nincs adat!");
      }
  })

  }

}

export interface Variant {
  name: string,
  cost: number
  duration: number,
}

export interface Service {
  name: string,
  description: string,
  dos: string[],
  donts: string[],
  process: string[],
  variants: Variant[],
  imagePath: string
}


