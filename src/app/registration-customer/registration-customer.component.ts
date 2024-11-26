import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../authentication/AuthService';
@Component({
  selector: 'app-registration-customer',
  standalone: true,
  imports: [HeaderComponent, CommonModule],
  templateUrl: './registration-customer.component.html',
  styleUrl: './registration-customer.component.scss'
})

export class RegistrationCustomerComponent {
  haveAccount: boolean = true;
  apiUrlBase: string = 'http://localhost:8080/customer/';

  constructor(
    private authService: AuthService
  ){}

  toggleHaveAccount() {
    this.haveAccount = !this.haveAccount;
  }

  validateFormLogin(form: any) {
    return(
      (form.value.email !== '' || form.value.email !== null || !form.value.email) &&
      (form.value.password !== '' || form.value.password !== null || !form.value.cpf)
    );
  }


  validateCredentials(form: any, response: any) {
    return ((form.cpf.value === response.cpf.value) && (form.password.value === response.password.value));
  }

  login(form: any) {
    if (!this.validateFormLogin(form)) {
      console.error('Formulario inválido');
      return;
    }

    this.authService.login(); 
  }

  logout():void {
    this.authService.logout();
  }


}
