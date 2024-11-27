import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../authentication/AuthService';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-registration-customer',
  standalone: true,
  imports: [HeaderComponent, CommonModule, ReactiveFormsModule],
  templateUrl: './registration-customer.component.html',
  styleUrl: './registration-customer.component.scss'
})

export class RegistrationCustomerComponent {
  haveAccount: boolean = false;
  apiUrlSubscribe: string = 'http://localhost:8080/customer/subscribe';
  apiUrlGet: string = 'http://localhost:8080/customer/';
  uploadForm: FormGroup = new FormGroup({});
  downloadForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private http: HttpClient
  ){}

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      name: [''],
      email: [''],
      cpf: [''],
      password: [''],
      telNumber: [''],
      cep: [''],
      address: ['']
    });
  }

  toggleHaveAccount() {
    this.haveAccount = !this.haveAccount;
  }

  validateCredentials(form: any, response: any) {
    return ((form.cpf.value === response.cpf.value) && (form.password.value === response.password.value));
  }

  login() {    
    this.authService.setUserType(this.authService.customerType);
    this.authService.login(); 
  }

  logout():void {
    this.authService.setUserType('');
    this.authService.logout();
  }

  onFormSubmitRegister(event: any) {
    if (this.uploadForm.valid) {
      const formData = this.uploadForm.value;
  
      this.http.post('https://ec2-54-87-25-51.compute-1.amazonaws.com:8080/subscribe', formData)
        .subscribe({
          next: (response) => {
            this.login();
            alert('Cadastro realizado com sucesso!');
          },
          error: (error) => {
            console.error('Error:', error);
            alert('Erro ao realizar cadastro!');
          }
        });
    }
  }

  onFormSubmitLogin(event: any) {
    if (event.target.cpf.value && event.target.password.value) {
      const formData = new FormData();
      const queryCpf = event.target.cpf.value;
  
      formData.append('cpf', event.target.cpf.value);
      formData.append('password', event.target.password.value);
      fetch(this.apiUrlGet + queryCpf, {
        method: 'GET',
        body: formData
      })
      .then(response => response.json())
      .then(response => {
        if (this.validateCredentials(event.target, response)) {
          this.login();
        }
      })
      .catch(error => console.error('Error:', error));
    }
  }

  getLoginStatus() {
    return this.authService.getCurrentLoginStatus();
  }
}
