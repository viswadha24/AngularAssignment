import { TestBed } from '@angular/core/testing';

import { FlowerCardsDataService } from './flower-cards-data.service';

describe('FlowerCardsDataService', () => {
  let service: FlowerCardsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowerCardsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
