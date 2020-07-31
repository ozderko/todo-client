import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeComponent } from './components/theme/theme.component';
import { ButtonDirective } from './directives/button.directive';



@NgModule({
  declarations: [ThemeComponent, ButtonDirective],
  imports: [
    CommonModule
  ],
  exports: [ThemeComponent, ButtonDirective]
})
export class SharedModule { }
