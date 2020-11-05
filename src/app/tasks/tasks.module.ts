import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from './components/tasks/tasks.component';
import {TasksRoutingModule} from './tasks-routing.module';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TasksEffects} from './actions/effects/tasks.effects';
import {reducers} from './actions/reducer/index';
import {ToolbarComponent} from './components/toolbar/toolbar.component';
import {TaskComponent} from './components/task/task.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [TasksComponent, ToolbarComponent, TaskComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    StoreModule.forFeature('tasks', reducers),
    EffectsModule.forFeature([TasksEffects]),
    ReactiveFormsModule,
  ]
})
export class TasksModule {
}
