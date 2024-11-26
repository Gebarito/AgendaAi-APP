import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationCustomerComponent } from './registration-customer.component';

describe('RegistrationCustomerComponent', () => {
  let component: RegistrationCustomerComponent;
  let fixture: ComponentFixture<RegistrationCustomerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationCustomerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationCustomerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
