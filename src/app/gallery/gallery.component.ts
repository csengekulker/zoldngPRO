import { Component } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {

  path: string = '../assets/gallery/forest.jpg';
  path1: string = '../assets/gallery/nature-wallpaper.jpg';


  base:string = '../assets/gallery/'

  paths1:string[] = [
    'forest.jpg',
    'nature-wallpaper.jpg',
    'trees-3.jpg',
    'trees.jpg'
  ]

  paths2:string[] = [
    'essential-oil.jpg',
    'glass1920.jpg',
    'massage.jpg',
    'oil.jpg',
    'wellness.jpg'
  ]

}
