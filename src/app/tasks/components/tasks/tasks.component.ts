import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../actions/reducer/tasks.reducers';
import {LoadTasksAction} from '../../actions/tasks.action';
import * as fromTasks from '../../actions/reducer/index';
import {Observable, Subscription} from 'rxjs';
import {Task} from '../../models/task.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit, OnDestroy {
  public tasks: Task[];

  private taskSub$: Subscription;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.store.dispatch(new LoadTasksAction());
    this.taskSub$ = this.store.select(fromTasks.getTasks).subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      console.log(tasks);
    });

  }

  ngOnDestroy(): void {
    this.taskSub$.unsubscribe();
  }

}
