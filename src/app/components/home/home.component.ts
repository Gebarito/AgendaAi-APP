import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    console.log(' INIT - HOME COMPONENT - APPLICATION LOADED');
  }

  redirectToComponent(component: string) {
    this.router.navigate(['/' + component]);
  }

  isInSession() {
    return this.authService.isInSession();
  }

  outOfHome() {
    return this.router.url !== '/home';
  }

}
