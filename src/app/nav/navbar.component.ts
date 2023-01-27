import { Component, OnInit } from '@angular/core';
import { Routes } from '@angular/router';
import { BookingComponent } from '../booking/booking.component';
import { GalleryComponent } from '../gallery/gallery.component';
import { HomeComponent } from '../home/home.component';
import { ServicesComponent } from '../services/services.component';

@Component({
  selector: 'nav-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavigationComponent implements OnInit {
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
