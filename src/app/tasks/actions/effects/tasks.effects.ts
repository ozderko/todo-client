import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {State} from '../reducer/tasks.reducers';
import {TasksService} from '../../services/tasks.service';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {
  CreateTaskAction,
  CreateTaskSuccessAction,
  LoadTasksAction,
  LoadTasksSuccessAction,
  SelectTaskAction,
  SelectTaskSuccessAction,
  TasksActionTypes
} from '../tasks.action';
import {Task} from '../../models/task.model';

@Injectable()
export class TasksEffects {

  constructor(private actions: Actions,
              private tasksService: TasksService,
              private store: Store<State>) {
  }

  @Effect()
  loadTasks: Observable<Action> = this.actions.pipe(
    ofType(TasksActionTypes.LoadTasks),
    switchMap((action: LoadTasksAction) => {
      return this.tasksService.getTasks().pipe(
        map((tasks: Task[]) => new LoadTasksSuccessAction(tasks)),
      );
    })
  );

  @Effect()
  selectTasks: Observable<Action> = this.actions.pipe(
    ofType(TasksActionTypes.SelectTask),
    switchMap((action: SelectTaskAction) => {
      return this.tasksService.updateSelect(action.id).pipe(
        map((tasks: Task[]) => new SelectTaskSuccessAction(tasks)),
      );
    })
  );

  @Effect()
  createTasks: Observable<Action> = this.actions.pipe(
    ofType(TasksActionTypes.CreateTask),
    switchMap((action: CreateTaskAction) => {
      return this.tasksService.createTask(action.task).pipe(
        map((tasks: Task[]) => new CreateTaskSuccessAction(tasks)),
      );
    })
  );
}
