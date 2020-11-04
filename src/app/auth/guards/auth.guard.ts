import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private jwtService: JwtHelperService) {
  }
  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token: string = localStorage.getItem('x-access-token');
    if (token && !this.jwtService.isTokenExpired(token)) {
      return true;
    }
    localStorage.removeItem('x-access-token');
    this.router.navigate(['']);
    return false;
  }
}
