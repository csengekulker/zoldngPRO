import { Component, OnInit } from '@angular/core';
import { SuccessResponse as Res, ErrorResponse as Err } from 'src/app/models';
import Service from 'src/app/models/Service';
import { ServiceApiService, TypeApiService } from 'src/app/shared/api';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['../info.component.scss']
})
export class PricelistComponent implements OnInit {
  buttonText :string = " Információk"
  services!:Service[]
  types!:any
  serviceTypes!:any

  constructor(
    private serviceApi: ServiceApiService,
    private typeApi: TypeApiService
    ) { }

  ngOnInit(): void { 

    this.serviceApi.fetchServices().subscribe({
      next: (data:Res) => {
        this.services = data.data
      },
      error: (err:Err) => {
        console.log(err);
        
      }
    })

    this.typeApi.fetchTypes().subscribe({
      next: (data:Res) => {
        this.types = data.data        
      },
      error: (err:any) => {
        console.log(err);
        
      }
    }) 
  }
}
