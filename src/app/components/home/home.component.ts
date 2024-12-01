import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(
    private router: Router,
  ) {
    console.log(' INIT - HOME COMPONENT - APPLICATION LOADED');
  }

  redirectToComponent(component: string) {
    console.log('Redirecting to: ', component);
    this.router.navigate(['/' + component]);
  }

}
