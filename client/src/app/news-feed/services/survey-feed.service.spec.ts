import { TestBed } from '@angular/core/testing';

import { SurveyFeedService } from './survey-feed.service';

describe('SurveyFeedService', () => {
  let service: SurveyFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurveyFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
