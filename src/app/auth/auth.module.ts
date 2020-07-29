import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './components/login/login.component';
import {StoreModule} from '@ngrx/store';
import {authReducer} from './actions/reducer/auth.reducers';
import {EffectsModule} from '@ngrx/effects';
import {AuthEffects} from './actions/effects/auth.effects';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    StoreModule.forFeature('authFeature', {auth: authReducer}),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class AuthModule {
}
