import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
  HomeComponent,
  ServicesComponent as ClientServices,
  BookingComponent,
  GalleryComponent,
  BlogComponent,
  FooterComponent,
  NavigationComponent,
  NotfoundComponent

} from './client'

import { 
  HeaderComponent,
  IconsComponent,
  FeatureComponent,
  ContactComponent,
} from './client/home'


import { DocsComponent } from './client/info/docs/docs.component';
import { FaqComponent } from './client/info/faq/faq.component';
import { InfoComponent } from './client/info/info.component';
import { PricelistComponent } from './client/info/pricelist/pricelist.component';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ButtonComponent } from './client/info/button/button.component';
import { BookingInfoComponent } from './client/booking/info/info.component';
import { FormComponent } from './client/booking/form/form.component';
import { EditModal } from './core/modals';
import { SidebarComponent } from './admin/main/sidebar/sidebar.component';

import { 
  LoginComponent,
  MainComponent,
  AppointmentsComponent, 
  MessagesComponent, 
  ServicesComponent as AdminServices, 
  BookingsComponent, 
  ClientsComponent } from './admin';

import { BookingfilterPipe } from './shared/pipe/bookingfilter.pipe';
import { ClientfilterPipe } from './shared/pipe/clientfilter.pipe';
import { TypesComponent } from './admin/types/types.component';
import { ClientComponent } from './client/client.component';
import { AdminComponent } from './admin/admin.component';
import { ConfirmationModalComponent } from './core/confirmation-modal/confirmation-modal.component';
import { FormModalComponent } from './core/form-modal/form-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactComponent,
    AdminComponent,
    ClientComponent,
    FooterComponent,
    BookingComponent,
    BookingInfoComponent,
    ClientServices,
    GalleryComponent,
    FeatureComponent,
    IconsComponent,
    NavigationComponent,
    HeaderComponent,
    InfoComponent,
    FaqComponent,
    PricelistComponent,
    DocsComponent,
    NotfoundComponent,
    ButtonComponent,
    FormComponent,
    LoginComponent,
    ClientsComponent,
    AdminServices,
    MainComponent,
    BlogComponent,
    EditModal,
    BookingsComponent,
    SidebarComponent,
    AppointmentsComponent,
    MessagesComponent,
    BookingfilterPipe,
    ClientfilterPipe,
    TypesComponent,
    ConfirmationModalComponent,
    FormModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
