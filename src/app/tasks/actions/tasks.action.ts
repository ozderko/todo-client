import {Action} from '@ngrx/store';
import {Task} from '../models/task.model';


export enum TasksActionTypes {
  LoadTasks = '[Tasks] Get tasks action',
  LoadTasksSuccess = '[Tasks] Get tasks success action',
  SelectTask = '[Task] Select task action',
  SelectTaskSuccess = '[Task] Select task success action',
  CreateTask = '[Task] Create task action',
  CreateTaskSuccess = '[Task] Create task success action'
}

export class LoadTasksAction implements Action {
  public readonly type = TasksActionTypes.LoadTasks;
}

export class LoadTasksSuccessAction implements Action {
  public readonly type = TasksActionTypes.LoadTasksSuccess;

  constructor(public tasks: Task[]) {
  }
}

export class SelectTaskAction implements Action {
  public readonly type = TasksActionTypes.SelectTask;

  constructor(public id: string) {
  }
}

export class SelectTaskSuccessAction implements Action {
  public readonly type = TasksActionTypes.SelectTaskSuccess;

  constructor(public tasks: Task[]) {
  }
}

export class CreateTaskAction implements Action {
  public readonly type = TasksActionTypes.CreateTask;

  constructor(public task: Task) {
  }
}

export class CreateTaskSuccessAction implements Action {
  public readonly type = TasksActionTypes.CreateTaskSuccess;

  constructor(public tasks: Task[]) {
  }
}

export type TasksAction =
  LoadTasksAction |
  LoadTasksSuccessAction |
  SelectTaskAction |
  SelectTaskSuccessAction |
  CreateTaskAction |
  CreateTaskSuccessAction ;
