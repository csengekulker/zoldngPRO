import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.scss']
})
export class ButtonsComponent implements OnInit{

  buttons!: Button[]


  ngOnInit(): void {
    this.buttons = [
      {
        label: 'Home',
        path: '/'
      },
      {
        label: 'Services',
        path: '/services'
      },
      {
        label: 'Booking',
        path: '/booking'
      },
      {
        label: 'Gallery',
        path: '/gallery'
      }
    ]
  }

}

interface Button {
  label: string,
  path: string
}