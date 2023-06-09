import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'info-button',
  templateUrl: './button.component.html',
  styleUrls: ['../info.component.scss']
})
export class ButtonComponent implements OnInit{
  buttonText :string = " Információk"


  ngOnInit(): void { }

}
