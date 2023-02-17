import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { DocsComponent } from './info/docs/docs.component';
import { FaqComponent } from './info/faq/faq.component';
import { InfoComponent } from './info/info.component';
import { PricelistComponent } from './info/pricelist/pricelist.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'info', component: InfoComponent},
  {path: 'info/faq', component: FaqComponent},
  {path: 'info/pricing', component: PricelistComponent},
  {path: 'info/docs', component: DocsComponent}

];
// , {scrollPositionRestoration: 'enabled'}
@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
