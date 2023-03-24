import { Component, OnInit } from '@angular/core';
import docsJson from './docs.json'

let toTop = document.querySelector('#toTop')


@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['../info.component.scss']
})
export class DocsComponent implements OnInit {

  buttonText :string = " Információk"

  docs!:any

  ngOnInit(): void { 
    this.docs = docsJson
  }
}
