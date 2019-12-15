import { TestBed } from '@angular/core/testing';

import { OneUserResolverService } from './one-user-resolver.service';

describe('OneUserResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OneUserResolverService = TestBed.get(OneUserResolverService);
    expect(service).toBeTruthy();
  });
});
