import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  
  isLoggedIn$ = this.isLoggedInSubject.asObservable();

  login() {
    this.isLoggedInSubject.next(true);
  }

  logout() {
    this.isLoggedInSubject.next(false);
  }

  getCurrentLoginStatus(): boolean {
    return this.isLoggedInSubject.value;
  }

}
