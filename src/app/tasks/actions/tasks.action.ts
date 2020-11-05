import {Action} from '@ngrx/store';
import {Task} from '../models/task.model';


export enum TasksActionTypes {
  LoadTasks = '[Tasks] Get tasks action',
  LoadTasksSuccess = '[Tasks] Get tasks success action',
}

export class LoadTasksAction implements Action {
  public readonly type = TasksActionTypes.LoadTasks;
}

export class LoadTasksSuccessAction implements Action {
  public readonly type = TasksActionTypes.LoadTasksSuccess;

  constructor(public tasks: Task[]) {
  }
}

export type TasksAction =
  LoadTasksAction |
  LoadTasksSuccessAction;
