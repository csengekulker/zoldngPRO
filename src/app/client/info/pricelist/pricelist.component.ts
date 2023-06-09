import { Component, OnInit } from '@angular/core';
import { SuccessResponse as Res, ErrorResponse as Err } from 'src/app/models/HttpResponse';
import Service from 'src/app/models/Service';
import { ApiService } from 'src/app/shared/api.service';

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

  constructor(private api: ApiService) { }

  ngOnInit(): void { 

    this.api.fetchServices().subscribe({
      next: (data:Res) => {
        this.services = data.data
      },
      error: (err:Err) => {
        console.log(err);
        
      }
    })

    this.api.fetchTypes().subscribe({
      next: (data:Res) => {
        this.types = data.data        
      },
      error: (err:any) => {
        console.log(err);
        
      }
    }) 
  }
}
