import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTasksAdminComponent } from './list-tasks-admin.component';

describe('ListTasksAdminComponent', () => {
  let component: ListTasksAdminComponent;
  let fixture: ComponentFixture<ListTasksAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTasksAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTasksAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
