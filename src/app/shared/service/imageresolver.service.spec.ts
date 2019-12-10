import { TestBed } from '@angular/core/testing';

import { ImageresolverService } from './imageresolver.service';

describe('ImageresolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImageresolverService = TestBed.get(ImageresolverService);
    expect(service).toBeTruthy();
  });
});
