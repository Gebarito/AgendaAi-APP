import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HomeComponent } from 'src/app/components/home/home.component';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(
    private home: HomeComponent,
    private router: Router,
    private session: AuthService
  ) { 
    
  }

  getSession() {
    return this.session.isInSession();
  }

  isCustumer() {
    return this.session.accountType === 'customer';
  }
  
  redirectTo(component: string) {
    this.home.redirectToComponent(component);
  }

}
