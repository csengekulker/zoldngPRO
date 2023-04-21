import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './admin/clients/clients.component';
import { MainComponent } from './admin/main/main.component';
import { BlogComponent } from './blog/blog.component';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './info/docs/docs.component';
import { FaqComponent } from './info/faq/faq.component';
import { InfoComponent } from './info/info.component';
import { PricelistComponent } from './info/pricelist/pricelist.component';
import { LoginComponent } from './admin/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServicesComponent } from './services/services.component';
import { BookingsComponent } from './admin/bookings/bookings.component';
import { AppointmentsComponent } from './admin/appointments/appointments.component';
import { MessagesComponent } from './admin/messages/messages.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'int', component: MainComponent,
    children: [
      {path: 'clients', component: ClientsComponent},
      {path: 'bookings', component: BookingsComponent},
      {path: 'appointments', component: AppointmentsComponent},
      {path: 'messages', component: MessagesComponent}
    ]
  },
  {path: '', component: HomeComponent,
    children: [
      
    ]
  },
  {path: 'services', component: ServicesComponent},
  {path: 'booking', component: BookingComponent, data: {selectedService: null}},
  {path: 'gallery', component: GalleryComponent},
  {path: 'blog', component: BlogComponent},
  {path: 'info', component: InfoComponent,
    children: [
      {path: 'faq', component: FaqComponent},
      {path: 'pricing', component: PricelistComponent},
      {path: 'docs', component: DocsComponent},
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
