import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit{

  title = 'Home'

  path: string = '../assets/images/vert.png';
  rowpix: string = '../assets/images/vert.png';
  alttext: string = 'A kép leírása';

  constructor() { }

  ngOnInit(): void {
  }

}
