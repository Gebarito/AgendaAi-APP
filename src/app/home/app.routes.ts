import { provideRouter, Routes } from '@angular/router';
import { LoginCustomerComponent } from '../pages/login-customer/login-customer.component';

export const routes: Routes = [
  { path: 'customer-login', component: LoginCustomerComponent },
  { path: '', redirectTo: '/', pathMatch: 'full' },
];

export const appRoutes = provideRouter(routes);
