import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Task} from '../../models/task.model';
import {Store} from '@ngrx/store';
import {State} from '../../actions/reducer/tasks.reducers';
import {CreateTaskAction} from '../../actions/tasks.action';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  public createForm: FormGroup;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    this.prepareForm();
  }

  prepareForm() {
    this.createForm = new FormGroup({
      name: new FormControl(''),
      description: new FormControl(''),
    });
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }
    this.store.dispatch(new CreateTaskAction(this.createForm.value));
  }

}
