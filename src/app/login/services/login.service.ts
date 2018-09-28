import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from '../../shared/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  public user = '';
  public user$ = new BehaviorSubject<string>('login');

  constructor() {}

  public login() {
    this.user$.next('logout');
    this.user = 'Janet';
  }

  public logout() {
    this.user$.next('login');
    this.user = '';
  }

  public authenticate(user: Partial<User>) {}

  public isAuthorized(): boolean {
    return this.user !== '';
  }
}
