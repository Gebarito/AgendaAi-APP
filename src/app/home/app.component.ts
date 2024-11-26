import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './../shared/header/header.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
  title = 'AgendaAi-APP';

  showHomePage: boolean = false;

  constructor (
    private router: Router
  ) {
    this.router.events.subscribe((event) => {
      this.showHomePage = this.router.url === '/';
    });
  }
}
