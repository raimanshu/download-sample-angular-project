import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { delay } from "rxjs/operators";
import { HttpClient } from "@angular/common/http";
import { LocalStoreService } from '../utils/local-store.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  authenticated = false;
  private MODULE_API = {
    // SIGNUP: environment.baseUrlApi + 'api/register',
    // SIGNIN: environment.baseUrlApi + 'api/login',
    // RESET_PASSWORD: environment.baseUrlApi + 'api/forgetpassword',
    // SIGNOUT: environment.baseUrlApi + 'api/signout',
  }

  constructor(
    private store: LocalStoreService,
    private router: Router,
    private http: HttpClient) {
    this.checkAuth();
  }

  checkAuth() {
    // this.authenticated = this.store.getItem("demo_login_status");
    // return this.store.getItem('demo_login_status');
  }

  getuser() {
    return of({});
  }

  signin(credentials) {
    this.authenticated = true;
    this.store.setItem("demo_login_status", true);
    this.store.setItem('login-details', credentials);
    return of({}).pipe(delay(1500));
    // return this.http.post<any>(this.MODULE_API.SIGNIN, data)
  }
  signout() {
    this.authenticated = false;
    // this.store.setItem("demo_login_status", false);
    // localStorage.removeItem('login-details');
    this.store.clear();
    this.router.navigateByUrl("/sessions/login");
    return of({}).pipe(delay(1500));
    // return this.http.post<any>(this.MODULE_API.SIGNIN, data)
  }

  signup(credentials) {
    this.store.setItem('signup-details', credentials);
    return of({}).pipe(delay(1500));
    // return this.http.post<any>(this.MODULE_API.SIGNIN, data)
  }

  resetPassword(credentials){
    this.store.setItem('forget-details', credentials);
    return of({}).pipe(delay(1500));
    // return this.http.post<any>(this.MODULE_API.SIGNIN, data)
  }
}
