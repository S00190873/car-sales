import { TestBed } from '@angular/core/testing';

import { CarsApiService } from './cars-api.service';

describe('CarsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CarsApiService = TestBed.get(CarsApiService);
    expect(service).toBeTruthy();
  });
});
