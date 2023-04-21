import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menu = [
    {ref: 'clients', text: 'Vendegek' },
    {ref: 'bookings', text: 'Foglalasok'},
    {ref: 'appointments', text: 'Idopontok'},
    {ref: 'messages', text: 'Uzenetek'},
    {ref: 'services', text: 'Masszazsok'},
    {ref: 'types', text: 'Tipusok'}
  ]
}
