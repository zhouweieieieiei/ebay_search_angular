import { TestBed } from '@angular/core/testing';

import { ReswishcontrolService } from './reswishcontrol.service';

describe('ReswishcontrolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReswishcontrolService = TestBed.get(ReswishcontrolService);
    expect(service).toBeTruthy();
  });
});
