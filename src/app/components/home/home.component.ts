import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentStep = 'home';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {
    console.log(' INIT - HOME COMPONENT - APPLICATION LOADED');
  }

  public redirectToComponent(component: string) {
    this.currentStep = component;
  }

  getStep() {
    return this.currentStep;
  }


}
