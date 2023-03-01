import { Component, OnInit } from '@angular/core';
import servicesJson from '../../services/services.json'
import { Service } from 'src/app/services/services.component';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-pricelist',
  templateUrl: './pricelist.component.html',
  styleUrls: ['./pricelist.component.scss']
})
export class PricelistComponent implements OnInit {
  buttonText :string = "< Information"
  services!:any
  types!:any
  serviceTypes!:any

  constructor(private api: ApiService) { }


  ngOnInit(): void { 

    // console.log(servicesJson);

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
