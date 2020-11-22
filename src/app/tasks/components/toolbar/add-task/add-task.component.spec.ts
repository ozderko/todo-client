import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AddTaskComponent} from './add-task.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
      ],
      declarations: [AddTaskComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
