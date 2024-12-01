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

  /** form */
  id = '';
  name = '';
  category = '';
  dataCreated = new Date();
  active = false;
  description = '';
  schedule = {
    interval: 0,
  };

  constructor(
    private jobService: JobsServices
  ) {
    this.getJobs();
  }

  getJobs() {
    this.jobs$ = this.jobService.getJobs();
  }

  createJob() {
    this.jobService.createNewJob({
      name: this.name,
      category: this.category,
      dataCreated: this.dataCreated,
      active: this.active,
      description: this.description,
      schedule: this.schedule,
    }).subscribe(_ => this.getJobs());
  }

  updateJob() {
    this.jobService.editJob({
      id: this.id,
      name: this.name,
      category: this.category,
      dataCreated: this.dataCreated,
      active: this.active,
      description: this.description,
      schedule: this.schedule,
    }).subscribe(_ => this.getJobs());
  }

  autoCompleteField(job: Job) {
    this.id = job.id?.toString() || '';
    this.name = job.name;
    this.category = job.category;
    this.dataCreated = job.dataCreated;
    this.active = job.active;
    this.description = job.description;
    this.schedule = job.schedule;
  }

  deleteJob(id: string) {
    this.jobService.deleteJob(id).subscribe(_ => this.getJobs());
  }

}
