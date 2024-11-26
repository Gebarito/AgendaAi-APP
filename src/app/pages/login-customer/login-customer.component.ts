import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login-customer',
  standalone: true,
  templateUrl: './login-customer.component.html',
  styleUrls: ['./login-customer.component.scss'],
})

export class LoginCustomerComponent {
  loginForm: FormGroup;

  private readonly apiUrl = 'http://localhost:8080/customer/subscribe';

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.loginForm = this.fb.group({
      cpf: ['', [Validators.required]],
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      telNumber: ['', [Validators.required]],
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      this.http.post(this.apiUrl, this.loginForm.value).subscribe({
        next: (response) => {
          console.log('Cadastro realizado com sucesso!', response);
          alert('Cadastro realizado com sucesso!');
        },
        error: (err) => {
          console.error('Erro ao cadastrar cliente', err);
          alert('Erro ao realizar cadastro.');
        },
      });
    }
  }
}
