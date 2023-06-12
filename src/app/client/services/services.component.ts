import { ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import { 
  ServiceApiService,
  TypeApiService
 } from '../../shared/api';
import servicesJson from './services.json'
import { Router } from '@angular/router';
import { EmitterService } from '../../emitter.service';
import { PassService } from '../../shared/pass.service';
import Service from 'src/app/models/Service';
import { 
  Type, 
  SuccessResponse as Res, 
  ErrorResponse as Err
} from 'src/app/models';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush

})
export default class ServicesComponent implements OnInit {

  constructor(
    private serviceApi: ServiceApiService,
    private typeApi: TypeApiService,
    private pass: PassService,
    private emitter: EmitterService,
    private router: Router
  ) { }

  services!: Service[]
  fetchedTypes!: Type[]

  scrollIntoView(id:number) {
    document.getElementById(`service${id}`)?.scrollIntoView()    
  }

  //TODO: pass desired service details to booking

  onClick(event: any) {
    let sid = event.path[7].id
    let tid = event.path[3].id

    this.pass.setService(sid)
    this.pass.setType(tid)
    this.router.navigate(['/booking'])

    //need emitter to fire autoSelect()
    this.emitter.onButtonClick()

  }

  ngOnInit(): void {
    this.services = servicesJson.services

    this.serviceApi.fetchServices().subscribe({
      next: (data: Res) => {
        for (let i = 0; i < data.data.length; i++) {
          this.services[i].id = data.data[i].id
          this.services[i].name = data.data[i].name
        }
      },
      error: (err: Err) => {
        console.log("Hiba, nincs adat!");
      }
    })

    this.typeApi.fetchTypes().subscribe({
      next: (data: Res) => {
        console.log(data);

        this.fetchedTypes = data.data
      },
      error: (err: Err) => {
        console.log("Hiba, nincs adat!");
      }
    })

  }

}

