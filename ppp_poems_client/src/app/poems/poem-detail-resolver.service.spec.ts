import { TestBed, inject } from '@angular/core/testing';

import { PoemDetailResolverService } from './poem-detail-resolver.service';

describe('PoemDetailResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoemDetailResolverService]
    });
  });

  it('should be created', inject([PoemDetailResolverService], (service: PoemDetailResolverService) => {
    expect(service).toBeTruthy();
  }));
});
