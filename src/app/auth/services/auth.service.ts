import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {AuthModel} from '../models/auth.model';
import {AuthResultModel} from '../models/auth-result.model';
import {tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public baseApiUrl = environment.baseApiUrl;

  constructor(private http: HttpClient) {
  }

  login(login: AuthModel): Observable<AuthResultModel> {
    return this.http.post<AuthResultModel>(`${this.baseApiUrl}/auth/login`, login)
      .pipe(
        tap((tokens: AuthResultModel) => {
            localStorage.setItem('x-access-token', tokens.accessToken);
        })
      );
  }

  getColor() {
    return this.http.get(`${this.baseApiUrl}/marker`);
  }
}
