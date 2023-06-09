import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nav-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export default class NavigationComponent implements OnInit {
  buttons!: string[][]

  // TODO: refactor
  ngOnInit(): void {

    this.buttons = [
      [
        'Home',
        ''
      ],
      [
        'Services',
        '/services'
      ],
      [
        'Booking',
        '/booking'
      ],
      [
        'Gallery',
        '/gallery'
      ],
      [
        'Blog',
        '/blog'
      ]
    ]
  }

}
