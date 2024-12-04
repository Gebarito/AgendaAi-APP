import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Job } from 'src/app/models/jobs.models';
import { Order } from 'src/app/models/order.model';
import { AuthService } from 'src/app/services/auth.service';
import { JobsServices } from 'src/app/services/jobs.service';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-root',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  currentStep = 'home';

  jobs$ = new Observable<Job[]>();

  /** form JOBS*/
  id = '';
  name = '';
  category = '';
  dataCreated = new Date();
  active = false;
  description = '';
  schedule = {
    interval: 0,
  };

  /** form ORDER */
  order$ = new Observable<Order[]>();

  /** form */
  orderId = '';
  amount = 0;
  status = '';
  dateCreated = new Date();
  dateAppointment = new Date();
  job = {
    id: '',
    amount: 0,
    status: '',
    dateCreated: new Date(),
    dateAppointment: new Date()
  };


  constructor(
    private router: Router,
    private authService: AuthService,
    private jobService: JobsServices,
    private orderService: OrderService
  ) {
    this.getJobs();
    this.getOrders();
  }

  public redirectToComponent(component: string) {
    this.currentStep = component;
  }

  getStep() {
    return this.currentStep;
  }

  /** JOBS */

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

  /** order */
  getOrders() {
    this.order$ = this.orderService.getOrders();
  }

  createOrder() {
    this.orderService.createNewOrder({
      amount: this.amount,
      status: this.status,
      dateCreated: this.dateCreated,
      dateAppointment: this.dateAppointment,
    }).subscribe(_ => this.getOrders());
  }

  updateOrder() {
    this.orderService.editOrder({
      id: this.orderId,
      amount: this.amount,
      status: this.status,
      dateCreated: this.dateCreated,
      dateAppointment: this.dateAppointment,
    }).subscribe(_ => this.getOrders());
  }

  autoCompleteFieldOrder(order: Order) {
    this.orderId = order.id?.toString() || '';
    this.amount = order.amount;
    this.status = order.status;
    this.dateCreated = order.dateCreated;
    this.dateAppointment = order.dateAppointment;
  }

  deleteOrder(id: string) {
    this.orderService.deleteOrder(id)
      .subscribe(_ => this.getOrders());
  }

}
