import { Component, OnInit } from '@angular/core';

let toTop = document.querySelector('#toTop')


@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss']
})
export class DocsComponent implements OnInit {

  buttonText :string = "< Információk"

  ngOnInit(): void { }
}
