import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export default class HeaderComponent implements OnInit {

  path: string = '../assets/images/main.png';
  alttext: string = 'A kép leírása';
  
  ngOnInit(): void { }

}
