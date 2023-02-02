import { Component, OnInit } from '@angular/core';
import { ServicesComponent, Service, Variant } from '../services/services.component';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit{


  // destructure each object in the services array
  // name, variant name

  options!: Option[]

  // const { name, variantName }: {name: string, variantName: string} = options
  ngOnInit(): void {

    this.options = [
      {
        name: 'Sved',
        variants: [
          'full body',
          'neck | shoulders'
        ]
      },
      {
        name: 'Sport',
        variants: [
          'full body',
          'neck | shoulders'
        ]
      }
    ]
  }
}

interface Option {
  name: string,
  variants: string[]
}
