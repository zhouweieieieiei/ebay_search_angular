import { TestBed } from '@angular/core/testing';

import { SlidingcontrolService } from './slidingcontrol.service';

describe('SlidingcontrolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SlidingcontrolService = TestBed.get(SlidingcontrolService);
    expect(service).toBeTruthy();
  });
});
