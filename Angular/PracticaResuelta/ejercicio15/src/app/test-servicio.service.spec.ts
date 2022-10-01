import { TestBed } from '@angular/core/testing';

import { TestServicioService } from './test-servicio.service';

describe('TestServicioService', () => {
  let service: TestServicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TestServicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
