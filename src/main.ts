import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/home/app.component';
import { provideRouter } from '@angular/router';
import { RegistrationCustomerComponent } from './app/registration-customer/registration-customer.component';
import { RegistrationBusinessComponent } from './app/registration-business/registration-business.component';
import { ProfileComponent } from './app/profile/profile.component';

const routes = [
  { path: '', component: AppComponent },
  { path: 'customer', component: RegistrationCustomerComponent },
  { path: 'business', component: RegistrationBusinessComponent },
  { path: 'profile', component: ProfileComponent },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes)],
}).catch((err) => console.error(err));
