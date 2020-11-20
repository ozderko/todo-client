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
import {ReactiveFormsModule} from '@angular/forms';
import {ColorPickerModule} from 'ngx-color-picker';
import { MarkersComponent } from './components/markers/markers.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AddProjectComponent } from './components/toolbar/add-project/add-project.component';
import { AddTaskComponent } from './components/toolbar/add-task/add-task.component';


@NgModule({
  declarations: [TasksComponent, ToolbarComponent, TaskComponent, MarkersComponent, ProjectsComponent, AddProjectComponent, AddTaskComponent],
  imports: [
    CommonModule,
    TasksRoutingModule,
    SharedModule,
    StoreModule.forFeature('tasks', reducers),
    EffectsModule.forFeature([TasksEffects]),
    ReactiveFormsModule,
    ColorPickerModule
  ]
})
export class TasksModule {
}
