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
        text: "Bemutatkozom, Marti vagyokCurabitur vitae odio id purus dapibus imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean fringilla, tellus sit amet pulvinar imperdiet, felis massa volutpat massa, in laoreet ex turpis sit amet dolor. <br> Vivamus ut placerat magna. Pellentesque eu ante eu lorem tristique mattis quis id odio. Proin et tortor diam. Donec ut mattis nibh. Etiam tellus eros, gravida non congue ut, consectetur in justo. Etiam euismod fringilla leo, vel cursus nibh.",
        button: "References",
        isReversed: false
      },
      { 
        title: "Take a look inside", 
        text: "Watch the pictures representing the placeCurabitur vitae odio id purus dapibus imperdiet. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.Curabitur vitae odio id purus dapibus imperdiet. ",
        button: "Go to gallery",
        isReversed: true
      },
      { 
        title: "Massage services", 
        text: "Choose the therapy which suits your needs bestAenean fringilla, tellus sit amet pulvinar imperdiet, felis massa volutpat massa, in laoreet ex turpis sit amet dolor. <br> Vivamus ut placerat magna. Pellentesque eu ante eu lorem tristique mattis quis id odio. Proin et tortor diam. Donec ut mattis nibh. Etiam tellus eros, gravida non congue ut, consectetur in justo. Donec ut mattis nibh. Etiam tellus eros, gravida non congue ut, consectetur in justo. ",
        button: "Browse",
        isReversed: false
      },
      { 
        title: "Appointments", 
        text: "Set up an appointment and come refresh your body and soul Proin et tortor diam. Donec ut mattis nibh. Etiam tellus eros, gravida non congue ut, consectetur in justo.",
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