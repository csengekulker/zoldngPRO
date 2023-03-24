import { Component, OnInit } from '@angular/core';
import docsJson from './docs.json'

// TODO: scroll to top button, long page

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['../info.component.scss']
})
export class DocsComponent implements OnInit {

  docs!: any

  ngOnInit():void {
    this.docs = docsJson
  }


}
