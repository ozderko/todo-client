import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AuthGuard} from './auth/guards/auth.guard';
import {NotAuthGuard} from './auth/guards/not-auth.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    canActivate: [NotAuthGuard],
    data: {animation: 'isHome'}
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule),
    canActivate: [NotAuthGuard],
    data: {animation: 'isAuth'}
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then(mod => mod.TasksModule),
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
