import { TestBed } from '@angular/core/testing';

import { RealtService } from './realt.service';

describe('RealtService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RealtService = TestBed.get(RealtService);
    expect(service).toBeTruthy();
  });
});
