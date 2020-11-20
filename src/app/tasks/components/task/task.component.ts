import {Component, Input, OnInit} from '@angular/core';
import {Task} from '../../models/task.model';
import {Store} from '@ngrx/store';
import {State} from '../../actions/reducer/tasks.reducers';
import {SelectTaskAction} from '../../actions/tasks.action';
import {Marker} from '../../models/marker.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss']
})
export class TaskComponent implements OnInit {
  @Input() task: Task;
  @Input() markers: Marker[];
  public isOpen = false;
  public isDroped = false;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
  }

  select(): void {
    this.store.dispatch(new SelectTaskAction(this.task.id));
  }
}
