import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";

@Component({
  selector: 'app-registration-customer',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './registration-customer.component.html',
  styleUrl: './registration-customer.component.scss'
})
export class RegistrationCustomerComponent {}
