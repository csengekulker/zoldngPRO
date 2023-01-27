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
        text: 'Error occurs in the template of component IconsComponent.'
      },
      {
        path: '../assets/images/vert.png',
        text: 'Error occurs in the template of component IconsComponent.'
      },
      {
        path: '../assets/images/vert.png',
        text: 'Error occurs in the template of component IconsComponent.'
      },
      {
        path: '../assets/images/vert.png',
        text: 'Error occurs in the template of component IconsComponent.'
      }
    ]
  }

}

interface Icon {
  path: string,
  text: string
}