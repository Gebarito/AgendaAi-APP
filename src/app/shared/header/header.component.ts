import { Component } from '@angular/core';
import { RegistrationCustomerComponent } from '../../registration-customer/registration-customer.component';
import { AuthService } from '../../authentication/AuthService';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  isLoggedIn: boolean = false;

  constructor(
    private authService: AuthService
  ){}

  ngOnInit() {
    this.authService.isLoggedIn$.subscribe(status => {
      this.isLoggedIn = status;
    })
  }

}
