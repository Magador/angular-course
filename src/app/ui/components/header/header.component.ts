import { Component, OnInit } from '@angular/core';
import { faBars, faUser } from '@fortawesome/free-solid-svg-icons';
import { LoginService } from '../../../login/services/login.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  public title = 'Angular Course CRM';
  public faBars = faBars;
  public faUser = faUser;
  public toggled = true;
  private _logged = false;

  constructor(public loginService: LoginService) {}

  ngOnInit() {}

  get logged() {
    return this._logged;
  }

  set logged(value: boolean) {
    if (value) {
      this.loginService.login();
    } else {
      this.loginService.logout();
    }
    this._logged = value;
  }
}
