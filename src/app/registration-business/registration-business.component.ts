import { Component } from '@angular/core';
import { HeaderComponent } from "../shared/header/header.component";
import { CommonModule } from '@angular/common';
import { AuthService } from '../authentication/AuthService';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration-business',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HeaderComponent],
  templateUrl: './registration-business.component.html',
  styleUrl: './registration-business.component.scss'
})

export class RegistrationBusinessComponent {
  haveAccount: boolean = false;
  apiUrlSubscribe: string = 'http://localhost:8080/business/subscribe';
  apiUrlGet: string = 'http://localhost:8080/business/';
  uploadForm: FormGroup = new FormGroup({});
  downloadForm: FormGroup = new FormGroup({});

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ){}

  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      name: [''],
      email: [''],
      cnpj: [''],
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
    return ((form.cnpj.value === response.cnpj.value) && (form.password.value === response.password.value));
  }

  login() {
    this.authService.setUserType(this.authService.businessType);
    this.authService.login(); 
  }

  logout():void {
    this.authService.setUserType('');
    this.authService.logout();
  }

  onFormSubmitRegister(event: any) {
    if (event.target.cnpj.value && event.target.password.value) {
      const formData = new FormData();
      formData.append('cnpj', event.target.cnpj.value);
      formData.append('password', event.target.password.value);
      fetch(this.apiUrlSubscribe, {
        method: 'POST',
        body: formData
      })
      .then(response => response.json())
      .then(response => {
        if (this.validateCredentials(event.target, response)) {
          this.login();
          alert('Cadastro realizado com sucesso!');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Erro ao realizar cadastro!')
      });
  
    }
  }

  onFormSubmitLogin(event: any) {
    if (event.target.cnpj.value && event.target.password.value) {
      const formData = new FormData();
      const queryCnpj = event.target.cnpj.value;
  
      formData.append('cnpj', event.target.cnpj.value);
      formData.append('password', event.target.password.value);
      fetch(this.apiUrlGet + queryCnpj, {
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

}
