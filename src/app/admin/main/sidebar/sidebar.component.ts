import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  menu = [
    {ref: 'clients', text: 'Vendéglista' },
    {ref: 'bookings', text: 'Foglalások'},
    {ref: 'appointments', text: 'Időpontok'},
    {ref: 'messages', text: 'Üzenetek'},
    {ref: 'services', text: 'Masszázsok'},
    {ref: 'types', text: 'Tipusok'}
  ]
}
