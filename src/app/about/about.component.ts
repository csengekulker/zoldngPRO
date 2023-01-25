import { Component, OnInit } from '@angular/core';
// import zold1 from '../../static/jpg/zold1.jpg'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  title = 'About'
  
  path: string = '../assets/images/zold1.jpg';
  alttext: string = 'A kép leírása';

  constructor() {
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
