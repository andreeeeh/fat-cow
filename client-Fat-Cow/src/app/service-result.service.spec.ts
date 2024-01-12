import { TestBed } from '@angular/core/testing';

import { ServiceResultService } from './service-result.service';

describe('ServiceResultService', () => {
  let service: ServiceResultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceResultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
