import { TestBed, inject } from '@angular/core/testing';

import { SwCharactersService } from './sw-characters.service';

describe('SwCharactersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SwCharactersService]
    });
  });

  it('should be created', inject([SwCharactersService], (service: SwCharactersService) => {
    expect(service).toBeTruthy();
  }));
});
