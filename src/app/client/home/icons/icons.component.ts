import { Component, OnInit } from '@angular/core';
import iconsJson from './icons.json'
import { Icon } from 'src/app/models/Icon';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export default class IconsComponent implements OnInit{

  icons!: Icon[]

  alttext:string = 'alttext'

  ngOnInit(): void {
    
    this.icons = iconsJson.icons
  }

}

