import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule), data: { animation: 'isHome'}},
  {path: 'auth', loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule), data: { animation: 'isAuth'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
