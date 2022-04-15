import { TestBed } from '@angular/core/testing';

import { CreateResponseService } from './create-response.service';

describe('CreateResponseService', () => {
  let service: CreateResponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateResponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
