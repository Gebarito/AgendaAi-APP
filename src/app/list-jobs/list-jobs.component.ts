import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list-jobs',
  template: `
    <div *ngIf="jobs.length === 0">Carregando...</div>
    <div *ngFor="let job of jobs" class="job-item">
      <h3>{{ job.title }}</h3>
      <p>{{ job.description }}</p>
      <p><strong>Empresa:</strong> {{ job.company }}</p>
      <p><strong>Local:</strong> {{ job.location }}</p>
    </div>
  `,
  styles: [`
    .job-item {
      border: 1px solid #ccc;
      margin: 10px;
      padding: 15px;
      border-radius: 5px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
  `]
})
export class ListJobsComponent implements OnInit {
  jobs: any[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.fetchJobs();
  }

  fetchJobs(): void {
    const url = 'http://ec2-54-87-25-51.compute-1.amazonaws.com:8080/jobs';
    this.http.get<any[]>(url).subscribe(
      (data) => {
        this.jobs = data;
      },
      (error) => {
        console.error('Erro ao buscar os jobs:', error);
        this.jobs = [];
      }
    );
  }
}
