import { TestBed, inject } from '@angular/core/testing';

import { PoemDetailResolverService } from './poem-detail-resolver.service';
import {PoemCommentsResolverService} from "./poem-comments-resolver.service";

describe('PoemCommentsResolverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PoemCommentsResolverService]
    });
  });

  it('should be created', inject([PoemCommentsResolverService], (service: PoemCommentsResolverService) => {
    expect(service).toBeTruthy();
  }));
});
