import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './components/theme/theme.component';
import { ButtonDirective } from './directives/button.directive';
import { HeaderComponent } from './components/header/header.component';
import {RouterModule} from '@angular/router';
import {MaterialModule} from '../material/material.module';



@NgModule({
  declarations: [ThemeComponent, ButtonDirective, HeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [ThemeComponent, ButtonDirective, HeaderComponent, MaterialModule]
})
export class SharedModule { }
