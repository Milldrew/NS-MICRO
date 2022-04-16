import { Component, OnInit } from '@angular/core';
import { SurveyFeedService } from './services/survey-feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {
  constructor(private surveyFeed: SurveyFeedService) {}
  news: any[] = [
    {
      id: 4,
      username: 'Joe',
      question: 'What is your favorite color?',
      answers: ['red', 'green', 'blue'],
    },
  ];

  ngAfterContentChecked() {
    this.news = this.news;
  }
  ngOnInit(): void {
    console.log('hello from init');
    this.surveyFeed.listen('newsFeed').subscribe((data) => {
      console.log('hello from init');
      this.news.push(data);
    });
  }
}
