import { AuthService } from 'src/app/services/auth.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Business } from 'src/app/models/business.model';
import { BusinessService } from 'src/app/services/business.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css'],
  })
export class BusinessComponent {
  business$ = new Observable<Business[]>();

  haveAccount = false;
  authService: AuthService;

  /** form */
  id = 0;
  cnpj = '';
  name = '';
  email = '';
  password = '';
  telNumber = '';
  cep = '';
  address = '';
  constructor(
    private authservice: AuthService,
    private businessService: BusinessService,
  ) {
    this.authService = authservice;
  }

  toggleRegister() {
    this.haveAccount = !this.haveAccount;
  }

  getBusiness() {
    this.business$ = this.businessService.getBusiness();
  }

  createBusiness() {
    this.businessService.createNewBusiness({
      cnpj: this.cnpj,
      name: this.name,
      email: this.email,
      password: this.password,
      telNumber: this.telNumber,
      cep: this.cep,
      address: this.address,
    }).subscribe(_ => this.getBusiness());
  }

  updateBusiness() {
    this.businessService.editBusiness({
      id: this.id,
      cnpj: this.cnpj,
      name: this.name,
      email: this.email,
      password: this.password,
      telNumber: this.telNumber,
      cep: this.cep,
      address: this.address,
    }).subscribe(_ => this.getBusiness());
  }

  autoCompleteField(business: Business) {
    this.id = business.id || 0;
    this.cnpj = business.cnpj;
    this.name = business.name;
    this.email = business.email;
    this.password = business.password;
    this.telNumber = business.telNumber;
    this.cep = business.cep;
    this.address = business.address;
  }

  deleteBusiness(id: number) {
    this.businessService
      .deleteBusiness(id).subscribe(_ => this.getBusiness());
  }

}
