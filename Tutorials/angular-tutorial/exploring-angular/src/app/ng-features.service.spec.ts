import { TestBed, inject } from '@angular/core/testing';

import { NgFeaturesService } from './ng-features.service';

describe('NgFeaturesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NgFeaturesService]
    });
  });

  it('should be created', inject([NgFeaturesService], (service: NgFeaturesService) => {
    expect(service).toBeTruthy();
  }));
});
