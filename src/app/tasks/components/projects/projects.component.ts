import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../actions/reducer/tasks.reducers';
import {LoadMarkersAction, LoadProjectsAction, LoadTasksAction} from '../../actions/tasks.action';
import * as fromTasks from '../../actions/reducer/index';
import {Subscription} from 'rxjs';
import {Project} from '../../models/project.model';
import {Task} from '../../models/task.model';
import {Marker} from '../../models/marker.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit, OnDestroy {

  public projects: Project[];
  public tasks: Task[];
  public markers: Marker[];

  public projectsSub$: Subscription;
  private taskSub$: Subscription;
  private markerSub$: Subscription;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadProjectsAction());
    this.store.dispatch(new LoadTasksAction());
    this.store.dispatch(new LoadMarkersAction());
    this.projectsSub$ = this.store.select(fromTasks.getProjects).subscribe((projects: Project[]) => {
      this.projects = projects;
    });
    this.taskSub$ = this.store.select(fromTasks.getTasks).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
    this.markerSub$ = this.store.select(fromTasks.getMarkers).subscribe((markers: Marker[]) => {
      this.markers = markers;
    });
  }

  ngOnDestroy(): void {
    this.projectsSub$.unsubscribe();
    this.taskSub$.unsubscribe();
    this.markerSub$.unsubscribe();
  }

  getTasks(project: Project): Task[] {
    return this.tasks.filter(task => project.tasksId.some(id => id === task.id));
  }

}
