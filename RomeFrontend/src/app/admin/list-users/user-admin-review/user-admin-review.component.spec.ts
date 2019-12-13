import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserAdminReviewComponent } from './user-admin-review.component';

describe('UserAdminReviewComponent', () => {
  let component: UserAdminReviewComponent;
  let fixture: ComponentFixture<UserAdminReviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserAdminReviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserAdminReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
