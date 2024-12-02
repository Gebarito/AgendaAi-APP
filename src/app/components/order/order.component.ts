import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Order } from 'src/app/models/order.model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent {
  order$ = new Observable<Order[]>();

  /** form */
  id = '';
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
    private orderService: OrderService
  ) {
    this.getOrders();
  }

  getOrders() {
    this.order$ = this.orderService.getOrders();
  }

  createJob() {
    this.orderService.createNewOrder({
      amount: this.amount,
      status: this.status,
      dateCreated: this.dateCreated,
      dateAppointment: this.dateAppointment,
    }).subscribe(_ => this.getOrders());
  }

  updateJob() {
    this.orderService.editJob({
      id: this.id,
      amount: this.amount,
      status: this.status,
      dateCreated: this.dateCreated,
      dateAppointment: this.dateAppointment,
    }).subscribe(_ => this.getOrders());
  }

  autoCompleteField(order: Order) {
    this.id = order.id?.toString() || '';
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
