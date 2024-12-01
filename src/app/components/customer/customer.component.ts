import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {
  haveAccount = false;
  authService: AuthService;

  constructor(
    private authservice: AuthService
  ) {
    this.authService = authservice;
  }

  toggleRegister() {
    this.haveAccount = !this.haveAccount;
  }

}
