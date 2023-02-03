import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';
import { EmitterService } from '../emitter.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  products!: any
  constructor(private api: ApiService, private emitter: EmitterService) { }

  title = 'Massage Terapies'

  public services!: Service[]

  path: string = '../assets/images/vert.png';
  alttext: string = 'A kép leírása';

  getProducts() {
    this.api.getProducts().subscribe({
      next: data => {
        this.products = data.data
        console.log(data.data); // sendResponse
        console.log(this.products);

        
      },
      error: err => {
        console.log("Hiba, nincs termek!");
        
      }
    })
  }

  collectServiceDetails(event: any) {
    let type = event.path[3].childNodes[0].childNodes[0].nodeValue
    let duration = event.path[3].childNodes[1].childNodes[0].nodeValue
    let price = event.path[3].childNodes[2].childNodes[0].nodeValue

    let details = {
      type: type,
      duration: duration,
      price: price
    }

    console.log(details);
  
  }

  ngOnInit(): void {

    this.emitter.event.subscribe( (e)=> {
      this.collectServiceDetails(e)
    })

    this.getProducts()


    // let data = {
    //   name: "billentyűzet",
    //   itemNumber: "cab34",
    //   count: 25,
    //   price: 8
    // };

    // this.api.addProducts(data)

    this.services = [
      {
        name: 'Svédmasszázs',
        description: 'mashogy lesz',
        dos: [
          '🟢 akik stresszes életvitelt folytatnak, alig van idejük saját magukra',
          '🟢 akik aktív sportolók és a sportolás következtében testük fáradt, izmaik feszültek és kemények',
          '🟢 akik testmozgás hiányában szeretnék izmaikat átmozogtatni, megdolgoztatni a svédmasszázs által',
          '🟢 akik testében sok a merevség, elég egy mozdulat és görcsbe rándul a test',
          '🟢 akik nem akarnak mást, csak kikapcsolódni pár órára a mindennapi rohanásból és megpihentetni lelküket.'
        ],
        donts: [
          'Curabitur pellentesque facilisis nisl non facilisis',
          'Pellentesque habitant morbi tristique senectus et netus',
          'Curabitur pellentesque facilisis nisl non facilisis'
        ],
        variants: [
          {
            name: 'teljes test',
            duration: 90,
            cost: 2345
          },
          {
            name: 'hát és derék + láb hátsó felszíne + talp',
            duration: 60,
            cost: 2345
          },
          {
            name: 'teljes hát | láb | talp',
            duration: 45,
            cost: 1234
          },
          {
            name: 'teljes hát | láb | talp',
            duration: 30,
            cost: 1234
          }
        ],
        imagePath: '../assets/images/vert.png'
      }
    ]
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
  donts: string[]
  variants: Variant[],
  imagePath: string
}


