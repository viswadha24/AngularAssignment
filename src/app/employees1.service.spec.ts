import { TestBed } from '@angular/core/testing';

import { Employees1Service } from './employees1.service';

describe('Employees1Service', () => {
  let service: Employees1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Employees1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
