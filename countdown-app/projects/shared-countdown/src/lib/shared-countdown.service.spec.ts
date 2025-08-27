import { TestBed } from '@angular/core/testing';

import { SharedCountdownService } from './shared-countdown.service';

describe('SharedCountdownService', () => {
  let service: SharedCountdownService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SharedCountdownService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
