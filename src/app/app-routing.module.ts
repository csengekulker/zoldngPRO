import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClientsComponent } from './admin/clients/clients.component';
import { MainComponent } from './admin/main/main.component';

import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './info/docs/docs.component';
import { FaqComponent } from './info/faq/faq.component';
import { InfoComponent } from './info/info.component';
import { PricelistComponent } from './info/pricelist/pricelist.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'int/clients', component: ClientsComponent},
  {path: 'int', component: MainComponent},

  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'booking', component: BookingComponent, data: {selectedService: null}},
  {path: 'gallery', component: GalleryComponent},
  {path: 'info', component: InfoComponent},
  {path: 'info/faq', component: FaqComponent},
  {path: 'info/pricing', component: PricelistComponent},
  {path: 'info/docs', component: DocsComponent},
  {path: '**', component: NotfoundComponent}

];
// , {scrollPositionRestoration: 'enabled'}
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
