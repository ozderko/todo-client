import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {State} from '../reducer/tasks.reducers';
import {TasksService} from '../../services/tasks.service';
import {Observable} from 'rxjs';
import {map, switchMap} from 'rxjs/operators';
import {
  CreateTaskAction,
  CreateTaskSuccessAction, LoadMarkersAction, LoadMarkersSuccessAction,
  LoadTasksAction,
  LoadTasksSuccessAction, SaveMarkerAction, SaveMarkerSuccessAction, SelectMarkerAction, SelectMarkerSuccessAction,
  SelectTaskAction,
  SelectTaskSuccessAction,
  TasksActionTypes
} from '../tasks.action';
import {Task} from '../../models/task.model';
import {MarkersService} from '../../services/markers.service';
import {Marker} from '../../models/marker.model';

@Injectable()
export class TasksEffects {

  constructor(private actions: Actions,
              private tasksService: TasksService,
              private markersService: MarkersService,
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
