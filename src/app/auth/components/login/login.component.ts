import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../actions/reducer/auth.reducers';
import {LogInAction} from '../../actions/auth.action';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: FormGroup;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm() {
    this.user = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.user.invalid) {
      return;
    }
    this.store.dispatch(new LogInAction(this.user.value));
  }

  countWidth(width) {
    return width.offsetWidth - 95;
  }
}
