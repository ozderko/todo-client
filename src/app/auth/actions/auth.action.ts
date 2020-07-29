import {Action} from '@ngrx/store';
import {AuthModel} from '../models/auth.model';


export enum AuthActionTypes {
  LogIn = '[Auth] Log in action',
  LogInSuccess = '[Auth] Log in success action',
  LogInFailture = '[Auth] Log in failture action'
}

export class LogInAction implements Action {
  public readonly type = AuthActionTypes.LogIn;

  constructor(public auth: AuthModel) {
  }
}

export class LogInSuccessAction implements Action {
  public readonly type = AuthActionTypes.LogInSuccess;
}

export class LogInFailtureAction implements Action {
  public readonly type = AuthActionTypes.LogInFailture;

  constructor(public error: any) {
  }
}

export type AuthAction =
  LogInAction |
  LogInSuccessAction |
  LogInFailtureAction;
