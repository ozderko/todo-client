import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable, of, throwError} from 'rxjs';
import {Action, Store} from '@ngrx/store';
import {State} from '../reducer/auth.reducers';
import {AuthActionTypes, LogInAction, LogInFailtureAction, LogInSuccessAction} from '../auth.action';
import {catchError, map, switchMap} from 'rxjs/operators';
import {AuthService} from '../../services/auth.service';


@Injectable()
export class AuthEffects {

  constructor(private actions: Actions,
              private authService: AuthService,
              private store: Store<State>) {
  }

  @Effect()
  logIn: Observable<Action> = this.actions.pipe(
    ofType(AuthActionTypes.LogIn),
    switchMap((action: LogInAction) => {
      return this.authService.login(action.auth).pipe(
        map(() => new LogInSuccessAction()),
        catchError(err => of(new LogInFailtureAction(err.error)))
      );
    })
  );
}
