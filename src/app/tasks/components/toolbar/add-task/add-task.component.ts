import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeAdd} from '../enum-type-add/enum-type-add';
import {Project} from '../../../models/project.model';
import {Store} from '@ngrx/store';
import {State} from '../../../actions/reducer/tasks.reducers';
import {CreateTaskAction} from '../../../actions/tasks.action';
import {Task} from '../../../models/task.model';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  @Input() projects: Project[];
  @Output() back = new EventEmitter();
  public createForm: FormGroup;
  public TypeAdd = TypeAdd;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm() {
    this.createForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      projectId: new FormControl('', [Validators.required])
    });
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }
    const form = this.createForm.value;
    const task = new Task({name: form.name, description: form.description});
    this.store.dispatch(new CreateTaskAction(task, this.createForm.value.projectId));
  }

}
