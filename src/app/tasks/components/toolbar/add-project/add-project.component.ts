import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TypeAdd} from '../enum-type-add/enum-type-add';
import {Store} from '@ngrx/store';
import {State} from '../../../actions/reducer/tasks.reducers';
import {CreateProjectAction} from '../../../actions/tasks.action';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {
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
    });
  }

  onSubmit() {
    if (this.createForm.invalid) {
      return;
    }
    this.store.dispatch(new CreateProjectAction(this.createForm.value));
    this.back.emit(this.TypeAdd.Undefined);
  }

}
