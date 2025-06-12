import { TestBed } from '@angular/core/testing';

import { OutageService } from './outage.service';

describe('OutageService', () => {
  let service: OutageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OutageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
