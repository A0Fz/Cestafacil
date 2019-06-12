import { TestBed } from '@angular/core/testing';

import { CorreiosService } from './correios.service';

describe('CorreiosService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CorreiosService = TestBed.get(CorreiosService);
    expect(service).toBeTruthy();
  });
});
