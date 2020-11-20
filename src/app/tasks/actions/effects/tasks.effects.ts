import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {State} from '../reducer/tasks.reducers';
import {TasksService} from '../../services/tasks.service';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {
  ChangeTaskProjectAction, ChangeTaskProjectSuccessAction,
  CreateProjectAction, CreateProjectSuccessAction,
  CreateTaskAction,
  CreateTaskSuccessAction, LoadMarkersAction, LoadMarkersSuccessAction, LoadProjectsAction, LoadProjectsSuccessAction,
  LoadTasksAction,
  LoadTasksSuccessAction, SaveMarkerAction, SaveMarkerSuccessAction, SelectMarkerAction, SelectMarkerSuccessAction,
  SelectTaskAction,
  SelectTaskSuccessAction,
  TasksActionTypes
} from '../tasks.action';
import {Task} from '../../models/task.model';
import {MarkersService} from '../../services/markers.service';
import {Marker} from '../../models/marker.model';
import {ProjectsService} from '../../services/projects/projects.service';
import {Project} from '../../models/project.model';

@Injectable()
export class TasksEffects {

  constructor(private actions: Actions,
              private tasksService: TasksService,
              private markersService: MarkersService,
              private projectsService: ProjectsService,
              private store: Store<State>) {
  }

  @Effect()
  loadProject: Observable<Action> = this.actions.pipe(
    ofType(TasksActionTypes.LoadProjects),
    switchMap((action: LoadProjectsAction) => {
      return this.projectsService.getProjects().pipe(
        map((projects: Project[]) => new LoadProjectsSuccessAction(projects)),
      );
    })
  );

  @Effect()
  createProject: Observable<Action> = this.actions.pipe(
    ofType(TasksActionTypes.CreateProject),
    switchMap((action: CreateProjectAction) => {
      return this.projectsService.createProject(action.project).pipe(
        map((projects: Project[]) => new CreateProjectSuccessAction(projects)),
      );
    })
  );

  @Effect()
  changeTaskProject: Observable<Action> = this.actions.pipe(
    ofType(TasksActionTypes.ChangeTaskProject),
    switchMap((action: ChangeTaskProjectAction) => {
      return this.projectsService.taskChangeProject(action.projectData).pipe(
        map((projects: Project[]) => new ChangeTaskProjectSuccessAction(projects)),
      );
    })
  );

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
      return this.tasksService.createTask(action.task, action.projectId).pipe(
        map((tasks: Task[]) => new CreateTaskSuccessAction(tasks)),
      );
    })
  );

  @Effect()
  loadMarkers: Observable<Action> = this.actions.pipe(
    ofType(TasksActionTypes.LoadMarkers),
    switchMap((action: LoadMarkersAction) => {
      return this.markersService.getMarkers().pipe(
        map((markers: Marker[]) => new LoadMarkersSuccessAction(markers)),
      );
    })
  );

  @Effect()
  selectMarker: Observable<Action> = this.actions.pipe(
    ofType(TasksActionTypes.SelectMarker),
    switchMap((action: SelectMarkerAction) => {
      return this.tasksService.selectMarker(action.id, action.color).pipe(
        map((tasks: Task[]) => new CreateTaskSuccessAction(tasks)),
      );
    })
  );

  @Effect()
  saveMarker: Observable<Action> = this.actions.pipe(
    ofType(TasksActionTypes.SaveMarker),
    switchMap((action: SaveMarkerAction) => {
      return this.markersService.saveColor(action.marker).pipe(
        map((markers: Marker[]) => new SaveMarkerSuccessAction(markers)),
      );
    })
  );
}
