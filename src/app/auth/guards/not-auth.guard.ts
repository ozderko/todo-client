import {Injectable} from '@angular/core';
import {CanActivate, Router, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {JwtHelperService} from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class NotAuthGuard implements CanActivate {
  constructor(private router: Router, private jwtService: JwtHelperService) {
  }

  canActivate(): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token: string = localStorage.getItem('x-access-token');
    if (token && !this.jwtService.isTokenExpired(token)) {
      this.router.navigate(['tasks']);
      return false;
    }
    localStorage.removeItem('x-access-token');
    return true;
  }
}
