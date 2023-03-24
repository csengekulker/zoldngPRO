import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['../info.component.scss']
})
export class PricelistComponent implements OnInit {
  buttonText :string = " Információk"
  services!:any
  types!:any
  serviceTypes!:any

  constructor(private api: ApiService) { }

  ngOnInit(): void { 

    this.api.fetchServices().subscribe({
      next: (data:any) => {
        this.services = data.data
        console.log(this.services);
        
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })

    this.api.fetchTypes().subscribe({
      next: (data:any) => {
        this.types = data.data
        console.log(this.types);
        
      },
      error: (err:any) => {
        console.log(err);
        
      }
    }) 
  }
}
