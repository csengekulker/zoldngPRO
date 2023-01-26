import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  title = 'Massage Terapies'

  path: string = '../assets/images/vert.png';
  alttext: string = 'A kép leírása';

}
