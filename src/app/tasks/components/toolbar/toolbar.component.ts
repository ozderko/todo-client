import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {State} from '../../actions/reducer/tasks.reducers';
import {TypeAdd} from './enum-type-add/enum-type-add';
import {Project} from '../../models/project.model';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() projects: Project[];
  public TypeAdd = TypeAdd;
  public typeAdd: TypeAdd = TypeAdd.Undefined;

  constructor(private store: Store<State>) {
  }

  ngOnInit(): void {
    // this.prepareForm();
  }

  // prepareForm() {
  //   this.createForm = new FormGroup({
  //     name: new FormControl(''),
  //     description: new FormControl(''),
  //   });
  // }
  //
  // onSubmit() {
  //   if (this.createForm.invalid) {
  //     return;
  //   }
  //   this.store.dispatch(new CreateTaskAction(this.createForm.value));
  // }

}
