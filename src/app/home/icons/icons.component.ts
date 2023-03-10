import { Component, OnInit } from '@angular/core';
import iconsJson from './icons.json'

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit{


  icons!: Icon[]

  alttext:string = 'alttext'

  ngOnInit(): void {
    
    this.icons = iconsJson.icons
  }

}

interface Icon {
  path: string,
  text: string
}