import { TestBed } from '@angular/core/testing';

import { MySurveysService } from './my-surveys.service';

describe('MySurveysService', () => {
  let service: MySurveysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MySurveysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
