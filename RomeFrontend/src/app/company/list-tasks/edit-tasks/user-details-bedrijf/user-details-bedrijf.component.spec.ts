import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDetailsBedrijfComponent } from './user-details-bedrijf.component';

describe('UserDetailsBedrijfComponent', () => {
  let component: UserDetailsBedrijfComponent;
  let fixture: ComponentFixture<UserDetailsBedrijfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDetailsBedrijfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDetailsBedrijfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
