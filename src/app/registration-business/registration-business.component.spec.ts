import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrationBusinessComponent } from './registration-business.component';

describe('RegistrationBusinessComponent', () => {
  let component: RegistrationBusinessComponent;
  let fixture: ComponentFixture<RegistrationBusinessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrationBusinessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrationBusinessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
