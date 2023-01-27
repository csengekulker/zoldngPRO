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
        title: "Introduction", 
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        button: "button",
        isReversed: false
      },
      { 
        title: "Take a look inside", 
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        button: "Go to gallery",
        isReversed: true
      },
      { 
        title: "Massage services", 
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        button: "Browse",
        isReversed: false
      },
      { 
        title: "Appointments", 
        text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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