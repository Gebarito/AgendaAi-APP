import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomerComponent } from './components/customer/customer.component';
import { BusinessComponent } from './components/business/business.component';

const routes: Routes = [
  /** redirect to home when there is no path or unknown path */
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: '***', component: HomeComponent },

  /** Custom component paths */
  { path: 'customer', component: CustomerComponent},
  { path: 'business', component: BusinessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
