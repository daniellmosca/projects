import { TestBed, inject } from '@angular/core/testing';

import { SwStarshipsService } from './sw-starships.service';

describe('SwStarshipsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwStarshipsService]
    });
  });

  it('should be created', inject([SwStarshipsService], (service: SwStarshipsService) => {
    expect(service).toBeTruthy();
  }));
});
