import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  private userType: string = '';
  businessType = 'business';
  customerType = 'customer';

  login() {
    this.isLoggedInSubject.next(true);
  }

  logout() {
    this.isLoggedInSubject.next(false);
  }

  getCurrentLoginStatus(): boolean {
    return this.isLoggedInSubject.value;
  }

  setUserType(userType: string) {
    this.userType = userType;
  }

  getUserType(): string {
    return this.userType;
  }

}
