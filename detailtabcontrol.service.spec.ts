import { TestBed } from '@angular/core/testing';

import { DetailtabcontrolService } from './detailtabcontrol.service';

describe('DetailtabcontrolService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DetailtabcontrolService = TestBed.get(DetailtabcontrolService);
    expect(service).toBeTruthy();
  });
});
