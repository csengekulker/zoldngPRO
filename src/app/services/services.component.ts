import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  title = 'Massage Terapies'

  public services!: Service[]

  path: string = '../assets/images/vert.png';
  alttext: string = 'A kép leírása';

  ngOnInit(): void {
    this.services = [
      {
        name: 'Sved',
        description: 'Phasellus sed sem sed ligula sagittis consequat et at est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ac eros est. Nunc nec fermentum libero, et suscipit erat. Quisque et libero ipsum. Ut ac arcu consequat, egestas quam sit amet, tempor Phasellus sed sem sed ligula sagittis consequat et at est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ac eros est. Nunc nec fermentum libero, et suscipit erat. Quisque et libero ipsum. Ut ac arcu consequat, egestas quam sit amet, tempor sapien.Phasellus sed sem sed ligula sagittis consequat et at est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ac eros est. Nunc nec fermentum libero, et suscipit erat. Quisque et libero ipsum. Ut ac arcu consequat, egestas quam sit amet, tempor sapien.sapien.',
        dos: [
          'Pellentesque habitant morbi tristique senectus et netus',
          'Pellentesque habitant morbi tristique senectus et netus'
        ],
        donts: [
          'Curabitur pellentesque facilisis nisl non facilisis',
          'Pellentesque habitant morbi tristique senectus et netus',
          'Curabitur pellentesque facilisis nisl non facilisis'
        ],
        variants: [
          {
            name: 'full body',
            duration: 45,
            cost: 2345
          },
          {
            name: 'back | neck | shoulders',
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


