/**
 * Title: sign-in.guard.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 10 Jun 2023
 * Description: sign-in guard
*/
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  constructor(private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    let isLoggedIn = next.queryParams.isLoggedIn

    if (isLoggedIn === true) {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }

}
