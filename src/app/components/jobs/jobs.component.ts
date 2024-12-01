import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from 'src/app/models/jobs.models';
import { JobsServices } from 'src/app/services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css']
})
export class JobsComponent {
  jobs$ = new Observable<Job[]>();

  constructor(
    private jobService: JobsServices
  ) {
    this.getJobs();
  }


  getJobs() {
    this.jobs$ = this.jobService.getJobs();
  }

}
