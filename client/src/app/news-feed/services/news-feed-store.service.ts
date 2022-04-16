import { Injectable } from '@angular/core';
import { SurveyFeedService } from './survey-feed.service';

@Injectable({
  providedIn: 'root',
})
export class NewsFeedStoreService {
  news: any = [];
  constructor(public readonly newsFeed: SurveyFeedService) {}

  addNews(moreNews: any) {
    this.news.push(moreNews);
  }
}
