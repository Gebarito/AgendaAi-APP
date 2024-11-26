import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registration-customer',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './registration-customer.component.html',
  styleUrl: './registration-customer.component.scss'
})

export class RegistrationCustomerComponent {
  haveAccount: boolean = true;

  toggleHaveAccount() {
    this.haveAccount = !this.haveAccount;
  }
}
