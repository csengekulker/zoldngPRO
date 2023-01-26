import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  fullName = new FormControl('');
  email = new FormControl('');
  message = new FormControl('');

  eventHandler() {
    console.log("event!");
    
  }

  constructor() {}
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
