import { Component, OnInit } from '@angular/core';
import featuresJson from './features.json'
import { Feature } from 'src/app/models';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export default class FeatureComponent implements OnInit {

  features!: Feature[]

  path: string = '../assets/images/vert.png';

  ngOnInit(): void {

    this.features = featuresJson.features
  }

}
