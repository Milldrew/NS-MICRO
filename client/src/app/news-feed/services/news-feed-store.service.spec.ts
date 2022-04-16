import { TestBed } from '@angular/core/testing';

import { NewsFeedStoreService } from './news-feed-store.service';

describe('NewsFeedStoreService', () => {
  let service: NewsFeedStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NewsFeedStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
