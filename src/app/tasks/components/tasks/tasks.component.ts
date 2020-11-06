import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../actions/reducer/tasks.reducers';
import {LoadMarkersAction, LoadTasksAction} from '../../actions/tasks.action';
import * as fromTasks from '../../actions/reducer/index';
import {Observable, Subscription} from 'rxjs';
import {Task} from '../../models/task.model';
import {Marker} from '../../models/marker.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  public tasks: Task[];
  public markers: Marker[];

  private taskSub$: Subscription;
  private markerSub$: Subscription;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadTasksAction());
    this.store.dispatch(new LoadMarkersAction());
    this.taskSub$ = this.store.select(fromTasks.getTasks).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      console.log(tasks);
    });
    this.markerSub$ = this.store.select(fromTasks.getMarkers).subscribe((markers: Marker[]) => {
      this.markers = markers;
      console.log(markers);
    });

  }

  ngOnDestroy(): void {
    this.taskSub$.unsubscribe();
    this.markerSub$.unsubscribe();
  }

}
