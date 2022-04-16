import { TestBed } from '@angular/core/testing';

import { MyResponsesService } from './my-responses.service';

describe('MyResponsesService', () => {
  let service: MyResponsesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyResponsesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
