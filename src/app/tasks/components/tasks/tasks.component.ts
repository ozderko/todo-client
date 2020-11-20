import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../actions/reducer/tasks.reducers';
import {Task} from '../../models/task.model';
import {Marker} from '../../models/marker.model';
import {CdkDragDrop} from '@angular/cdk/drag-drop';
import {Project} from '../../models/project.model';
import {ChangeTaskProjectAction} from '../../actions/tasks.action';
import {TaskChangeProject} from '../../models/taskChangeProject.model';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {
  @Input() markers: Marker[];
  @Input() tasks: Task[];
  @Input() project: Project;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<any>): void {
    const taskId = event.previousContainer.data.tasks[event.previousIndex];
    const projectToSave = event.container.data.project.id;
    const projectToDelete = event.previousContainer.data.project.id;
    const projectData = new TaskChangeProject(projectToDelete, projectToSave, taskId.id);
    this.store.dispatch(new ChangeTaskProjectAction(projectData));
  }
}
