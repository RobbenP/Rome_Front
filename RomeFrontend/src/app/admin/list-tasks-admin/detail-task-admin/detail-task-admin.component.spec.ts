import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTaskAdminComponent } from './detail-task-admin.component';

describe('DetailTaskAdminComponent', () => {
  let component: DetailTaskAdminComponent;
  let fixture: ComponentFixture<DetailTaskAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailTaskAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTaskAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
