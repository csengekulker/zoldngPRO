import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import {
  HomeComponent,
  ServicesComponent as ClientServices,
  BookingComponent,
  GalleryComponent,
  BlogComponent,
  NotfoundComponent
} from './client'


import { DocsComponent } from './client/info/docs/docs.component';
import { FaqComponent } from './client/info/faq/faq.component';
import { InfoComponent } from './client/info/info.component';
import { PricelistComponent } from './client/info/pricelist/pricelist.component';

import { 
  LoginComponent,
  MainComponent,
  AppointmentsComponent, 
  MessagesComponent, 
  ServicesComponent as AdminServices, 
  BookingsComponent, 
  ClientsComponent } from './admin';
import { AuthGuard } from './shared/auth/auth.guard';
import { TypesComponent } from './admin/types/types.component';
import { ClientComponent } from './client/client.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'admin', component: MainComponent,
    children: [
      {path: 'clients', component: ClientsComponent},
      {path: 'bookings', component: BookingsComponent},
      {path: 'appointments', component: AppointmentsComponent},
      {path: 'messages', component: MessagesComponent},
      {path: 'services', component: AdminServices},
      {path: 'types', component: TypesComponent}
    ],
    canActivate: [AuthGuard]
  },
  {path: '', component: ClientComponent,
    children: [
      {path: '', component: HomeComponent},
      {path: 'services', component: ClientServices},
      {path: 'booking', component: BookingComponent, data: {selectedService: null}},
      {path: 'gallery', component: GalleryComponent},
      {path: 'blog', component: BlogComponent},
      {path: 'info', component: InfoComponent,
        children: [
          {path: 'faq', component: FaqComponent},
          {path: 'pricing', component: PricelistComponent},
          {path: 'docs', component: DocsComponent},
        ]
      }
    ]
  },


  {path: '**', component: NotfoundComponent}

];
// , {scrollPositionRestoration: 'enabled'}
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
