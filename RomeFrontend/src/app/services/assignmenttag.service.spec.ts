import { TestBed } from '@angular/core/testing';

import { AssignmenttagService } from './assignmenttag.service';

describe('AssignmenttagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssignmenttagService = TestBed.get(AssignmenttagService);
    expect(service).toBeTruthy();
  });
});
