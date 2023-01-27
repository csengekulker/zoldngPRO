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
        text: 'REASONS'
      },
      {
        path: '../assets/images/vert.png',
        text: 'TO'
      },
      {
        path: '../assets/images/vert.png',
        text: 'TAKE'
      },
      {
        path: '../assets/images/vert.png',
        text: 'MASSAGE'
      }
    ]
  }

}

interface Icon {
  path: string,
  text: string
}