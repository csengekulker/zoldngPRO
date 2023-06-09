import { Component, OnInit } from '@angular/core';
import Service from 'src/app/models/Service';
import { ApiService } from 'src/app/shared/api.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export default class ServicesComponent implements OnInit {

  services!:Service[]

  constructor(private api: ApiService) {}

  ngOnInit():void {
    this.api.fetchServices().subscribe({
      next: (data:any) => {
        this.services = data.data
        
      }
    })

    
  }

}
