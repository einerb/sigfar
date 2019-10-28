import { TestBed } from '@angular/core/testing';

import { InterceptRequestsService } from './intercept-requests.service';

describe('InterceptRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InterceptRequestsService = TestBed.get(InterceptRequestsService);
    expect(service).toBeTruthy();
  });
});
