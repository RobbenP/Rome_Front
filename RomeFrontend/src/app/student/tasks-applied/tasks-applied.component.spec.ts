import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TasksAppliedComponent } from './tasks-applied.component';

describe('TasksAppliedComponent', () => {
  let component: TasksAppliedComponent;
  let fixture: ComponentFixture<TasksAppliedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TasksAppliedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TasksAppliedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
