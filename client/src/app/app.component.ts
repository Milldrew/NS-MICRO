import { Component } from '@angular/core';
import { NewsFeedStoreService } from './news-feed/services/news-feed-store.service';
import { SurveyFeedService } from './news-feed/services/survey-feed.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor(
    private surveyFeed: SurveyFeedService,
    public newsStore: NewsFeedStoreService
  ) {}

  ngOnInit() {
    this.surveyFeed.listen('newsFeed').subscribe((data) => {
      this.newsStore.addNews(data);
    });
  }
}
