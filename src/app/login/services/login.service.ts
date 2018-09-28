import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user = 'Janet';
  public user$ = new BehaviorSubject<string>('login');

  constructor() {}

  public login() {
    this.user$.next('logout');
  }

  public logout() {
    this.user$.next('login');
  }
}
