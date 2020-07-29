import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../actions/reducer/auth.reducers';
import {LogInAction} from '../../actions/auth.action';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<State>, private authService: AuthService) { }

  ngOnInit(): void {
    this.store.select<any>('authFeature').subscribe(state => {
      console.log(state);
    });
  }

  login(email: string, password: string) {
    this.store.dispatch(new LogInAction({email, password}));
  }

  color() {
    this.authService.getColor().subscribe(event => console.log(event));
  }
}
