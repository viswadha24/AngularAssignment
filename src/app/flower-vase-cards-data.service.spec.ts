import { TestBed } from '@angular/core/testing';

import { FlowerVaseCardsDataService } from './flower-vase-cards-data.service';

describe('FlowerVaseCardsDataService', () => {
  let service: FlowerVaseCardsDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowerVaseCardsDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
