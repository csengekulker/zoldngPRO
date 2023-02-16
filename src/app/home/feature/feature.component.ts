import { Component, OnInit } from '@angular/core';
import featuresJson from './features.json'

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  features!: any

  path: string = '../assets/images/vert.png';

  ngOnInit(): void {

    this.features = featuresJson
  }

}
