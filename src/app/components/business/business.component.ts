import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  })
export class BusinessComponent {
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
