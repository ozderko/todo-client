import {Action} from '@ngrx/store';
import {Task} from '../models/task.model';
import {Marker} from '../models/marker.model';
import {Project} from '../models/project.model';
import {TaskChangeProject} from '../models/taskChangeProject.model';


export enum TasksActionTypes {
  LoadProjects = '[Project] Get project action',
  LoadProjectsSuccess = '[Project] Get project success action',
  CreateProject = '[Project] Create project action',
  CreateProjectSuccess = '[Project] Create project success action',
  ChangeTaskProject = '[Project] Change task project action',
  ChangeTaskProjectSuccess = '[Project] Change task project success action',


  LoadTasks = '[Tasks] Get tasks action',
  LoadTasksSuccess = '[Tasks] Get tasks success action',
  SelectTask = '[Task] Select task action',
  SelectTaskSuccess = '[Task] Select task success action',
  CreateTask = '[Task] Create task action',
  CreateTaskSuccess = '[Task] Create task success action',

  LoadMarkers = '[Markers] Load markers action',
  LoadMarkersSuccess = '[Markers] Load markers success action',
  SelectMarker = '[Marker] Select marker action',
  SelectMarkerSuccess = '[Marker] Select marker success action',
  SaveMarker = '[Marker] Save marker action',
  SaveMarkerSuccess = '[Marker] Save marker success action',
}

export class LoadProjectsAction implements Action {
  public readonly type = TasksActionTypes.LoadProjects;
}

export class LoadProjectsSuccessAction implements Action {
  public readonly type = TasksActionTypes.LoadProjectsSuccess;

  constructor(public projects: Project[]) {
  }
}

export class CreateProjectAction implements Action {
  public readonly type = TasksActionTypes.CreateProject;

  constructor(public project: Project) {
  }
}

export class CreateProjectSuccessAction implements Action {
  public readonly type = TasksActionTypes.CreateProjectSuccess;

  constructor(public projects: Project[]) {
  }
}

export class ChangeTaskProjectAction implements Action {
  public readonly type = TasksActionTypes.ChangeTaskProject;

  constructor(public projectData: TaskChangeProject) {
  }
}

export class ChangeTaskProjectSuccessAction implements Action {
  public readonly type = TasksActionTypes.ChangeTaskProjectSuccess;

  constructor(public projects: Project[]) {
  }
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

  constructor(public task: Task, public projectId: string) {
  }
}

export class CreateTaskSuccessAction implements Action {
  public readonly type = TasksActionTypes.CreateTaskSuccess;

  constructor(public tasks: Task[], public projects: Project[]) {
  }
}


export class LoadMarkersAction implements Action {
  public readonly type = TasksActionTypes.LoadMarkers;
}

export class LoadMarkersSuccessAction implements Action {
  public readonly type = TasksActionTypes.LoadMarkersSuccess;

  constructor(public markers: Marker[]) {
  }
}

export class SelectMarkerAction implements Action {
  public readonly type = TasksActionTypes.SelectMarker;

  constructor(public id: string, public color: string) {
  }
}

export class SelectMarkerSuccessAction implements Action {
  public readonly type = TasksActionTypes.SelectMarkerSuccess;

  constructor(public tasks: Task[]) {
  }
}

export class SaveMarkerAction implements Action {
  public readonly type = TasksActionTypes.SaveMarker;

  constructor(public marker: Marker) {
  }
}

export class SaveMarkerSuccessAction implements Action {
  public readonly type = TasksActionTypes.SaveMarkerSuccess;

  constructor(public markers: Marker[]) {
  }
}

export type TasksAction =
  LoadProjectsAction |
  LoadProjectsSuccessAction |
  CreateProjectAction |
  CreateProjectSuccessAction |
  ChangeTaskProjectAction |
  ChangeTaskProjectSuccessAction |
  LoadTasksAction |
  LoadTasksSuccessAction |
  SelectTaskAction |
  SelectTaskSuccessAction |
  CreateTaskAction |
  CreateTaskSuccessAction |
  LoadMarkersAction |
  LoadMarkersSuccessAction |
  SelectMarkerAction |
  SelectMarkerSuccessAction |
  SaveMarkerAction |
  SaveMarkerSuccessAction;
