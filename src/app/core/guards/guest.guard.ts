import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { pagePaths, statusResponseCode } from '../config/router.config';
import { AuthService } from '../services/auth.service';
import { LocalStoreService } from '../utils/local-store.service';

@Injectable({
  providedIn: 'root'
})
export class GuestGuard implements CanActivate {
  
  constructor(
    private router:Router,
    private authService: AuthService,
    private localStoreService: LocalStoreService
    ){
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // if (this.authService.authenticated == false || this.authService.authenticated == null || this.authService.authenticated == undefined) {
      // this.router.navigateByUrl('/' + pagePaths.Sessions + '/' + pagePaths.Login);
      // return true;
    // }
    if (!this.localStoreService.getItem('demo_login_status')) {
      return true;
    } else {
      this.router.navigateByUrl('/' + pagePaths.Dashboard);
    }
  }

}
