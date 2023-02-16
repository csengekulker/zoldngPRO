import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit{


  icons!: Icon[]

  alttext:string = 'alttext'

  ngOnInit(): void {
    
    this.icons = [
      {
        path: '../assets/images/vert.png',
        text: 'Reduces stress and increases relaxation.'
      },
      {
        path: '../assets/images/vert.png',
        text: 'Reduces pain, muscle soreness and tension.'
      },
      {
        path: '../assets/images/vert.png',
        text: 'Improves circulation, energy and alertness.'
      },
      {
        path: '../assets/images/vert.png',
        text: 'Lowers heart rate and blood pressure.'
      }
    ]
  }

}

interface Icon {
  path: string,
  text: string
}