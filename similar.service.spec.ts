import { TestBed } from '@angular/core/testing';

import { SimilarService } from './similar.service';

describe('SimilarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SimilarService = TestBed.get(SimilarService);
    expect(service).toBeTruthy();
  });
});
