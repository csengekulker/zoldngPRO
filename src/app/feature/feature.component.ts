import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  paths = [];

  features!: Feature[]

  path: string = '../assets/images/vert.png';

  ngOnInit(): void {
    this.features = [
      { 
        title: "Introducing myself", 
        text: "Bemutatkozom, Marti vagyok",
        button: "References",
        isReversed: false
      },
      { 
        title: "Take a look inside", 
        text: "Watch the pictures representing the place",
        button: "Go to gallery",
        isReversed: true
      },
      { 
        title: "Massage services", 
        text: "Choose the therapy which suits your needs best",
        button: "Browse",
        isReversed: false
      },
      { 
        title: "Appointments", 
        text: "Set up an appointment and come refresh your body and soul",
        button: "Reserve",
        isReversed: true
      },
    ]
  }

}

interface Feature {
  title: string,
  text: string,
  button: string,
  isReversed: boolean
}