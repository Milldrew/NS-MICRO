import { Component, OnInit } from '@angular/core';
import { NewsFeedStoreService } from './services/news-feed-store.service';
import { SurveyFeedService } from './services/survey-feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {
  constructor(
    private surveyFeed: SurveyFeedService,
    public newsStore: NewsFeedStoreService
  ) {}
  news: any[] = [
    {
      id: 4,
      username: 'Joe',
      question: 'What is your favorite color?',
      answers: ['red', 'green', 'blue'],
    },
  ];

  ngAfterContentChecked() {
    this.news = this.newsStore.news;
  }
  ngOnInit(): void {
    console.log('hello from init');
    this.surveyFeed.listen('newsFeed').subscribe((data) => {
      this.newsStore.addNews(data);
    });
  }
}
