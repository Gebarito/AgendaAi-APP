import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginCustomerComponent } from './login-customer.component';

describe('LoginCustomerComponent', () => {
  let component: LoginCustomerComponent;
  let fixture: ComponentFixture<LoginCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LoginCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LoginCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
