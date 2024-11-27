import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-search-jobs',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './search-jobs.component.html',
  styleUrl: './search-jobs.component.scss'
})
export class SearchJobsComponent {
  jobs: any[] = [];
  apiBaseUrl: string = 'http://localhost:8080/jobs';
  NgOnInit() {
    this.loadJobs();
  }

  loadJobs() {
    fetch(this.apiBaseUrl, {
      method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
      this.jobs = data;
    });
  }

}
