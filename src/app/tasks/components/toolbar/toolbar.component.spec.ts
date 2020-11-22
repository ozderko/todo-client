import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ToolbarComponent} from './toolbar.component';
import {TypeAdd} from './enum-type-add/enum-type-add';
import {By} from '@angular/platform-browser';

describe('ToolbarComponent', () => {
  let component: ToolbarComponent;
  let fixture: ComponentFixture<ToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ToolbarComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should add class if typeadd is undefiled', () => {
    component.typeAdd = TypeAdd.Undefined;
    fixture.detectChanges();

    const de = fixture.debugElement.query(By.css('.toolbar__container'));
    const el: HTMLElement = de.nativeElement;
    expect(el.classList.contains('padding-if-undefined')).toBeTruthy();
  });

  it('should open project if clicked', () => {
    const btn = fixture.debugElement.query(By.css('.btn-project'));
    btn.triggerEventHandler('click', null);

    expect(component.typeAdd).toBe('AddProject');
  });

  it('should open task if clicked', () => {
    const btn = fixture.debugElement.query(By.css('.btn-task'));
    btn.triggerEventHandler('click', null);

    expect(component.typeAdd).toBe('AddTask');
  });
});
