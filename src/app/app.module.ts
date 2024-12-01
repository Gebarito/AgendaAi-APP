import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { JobsComponent } from './components/jobs/jobs.component';
import { BusinessComponent } from './components/business/business.component';
import { OrderComponent } from './components/order/order.component';
import { CustomerComponent } from './components/customer/customer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    /** Custom Component */
    AppComponent,
    JobsComponent,
    BusinessComponent,
    OrderComponent,
    CustomerComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, /** API Connection requirement (POST, GET, PUT, DELETE) */
  ],
  providers: [],
  bootstrap: [HomeComponent]
})
export class AppModule { }
