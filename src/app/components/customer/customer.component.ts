import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { AuthService } from 'src/app/services/auth.service';
import { CustomerService } from 'src/app/services/customer.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent {

  customer$ = new Observable<Customer>();

  private url = `${environment.api}/customers`;

  haveAccount = false;
  authService: AuthService;

  /** form */
  id = 0;
  cpf = '';
  name = '';
  email = '';
  password = '';
  telNumber = '';
  cep = '';
  address = '';
  
  constructor(
    private authservice: AuthService,
    private customerService: CustomerService
  ) {
    this.authService = authservice;
  }

  entrar() {
    this.customer$.forEach(customer => {
      if (
        customer.password === this.password &&
        customer.cpf === this.cpf
      ){
        this.authservice.login('customer', customer);
      }
    });
  }

  register() {
    this.customerService.postCustomer({
      id: this.id,
      cpf: this.cpf,
      name: this.name,
      email: this.email,
      password: this.password,
      telNumber: this.telNumber,
      cep: this.cep,
      address: this.address,
    }).subscribe();
  }

  toggleRegister() {
    this.haveAccount = !this.haveAccount;
  }

  getCustomerByCpf(cpf: string) {
    this.customer$ = this.customerService.getCustomerByCpf(cpf);
  }

  postCustomer(customer: Customer) {
    this.customerService.postCustomer(customer);
  }

  createCustomer() {
    this.customerService.postCustomer({
      id: this.id,
      cpf: this.cpf,
      name: this.name,
      email: this.email,
      password: this.password,
      telNumber: this.telNumber,
      cep: this.cep,
      address: this.address,
    });
  }

  updateCustomer(
    customer: Customer
  ) {
    this.customerService.editCustomer(customer);
  }

  deleteCustomer(
    id: number
  ) {
    this.customerService.deleteCustomer(id);
  }

}
