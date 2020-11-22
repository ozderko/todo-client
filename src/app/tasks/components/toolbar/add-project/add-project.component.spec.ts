import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectComponent } from './add-project.component';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';

describe('AddProjectComponent', () => {
  let component: AddProjectComponent;
  let fixture: ComponentFixture<AddProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        StoreModule.forRoot({}),
        EffectsModule.forRoot(),
      ],
      declarations: [ AddProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
