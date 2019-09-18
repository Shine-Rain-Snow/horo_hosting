import { TestBed } from '@angular/core/testing';

import { SunProgressService } from './sun-progress.service';

describe('SunProgressService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SunProgressService = TestBed.get(SunProgressService);
    expect(service).toBeTruthy();
  });
});
