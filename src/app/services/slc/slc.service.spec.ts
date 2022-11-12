import { TestBed } from '@angular/core/testing';

import { SlcService } from './slc.service';

describe('SlcService', () => {
  let service: SlcService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SlcService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
