import { TestBed } from '@angular/core/testing';

import { BouquesCardsDataService } from './bouques-cards-data.service';

describe('BouquesCardsDataService', () => {
  let service: BouquesCardsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BouquesCardsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
