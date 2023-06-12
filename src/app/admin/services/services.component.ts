import { Component, OnInit } from '@angular/core';
import {Service} from 'src/app/models';
import { ServiceApiService } from 'src/app/shared/api';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export default class ServicesComponent implements OnInit {

  services!:Service[]

  constructor(private api: ServiceApiService) {}

  ngOnInit():void {
    this.api.fetchServices().subscribe({
      next: (data:any) => {
        this.services = data.data
        
      }
    })

    
  }

}
