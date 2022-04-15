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
      question: 'What is your favorite color?',
      answers: ['red', 'green', 'blue'],
    },
  ];

  ngAfterContentChecked() {
    this.surveyFeed.listen('newsFeed').subscribe((value) => {
      console.log('hi from news feed', value);
      this.news.push(value);
    });
  }
  ngOnInit(): void {
    console.log('newfeed init top');
    this.surveyFeed.emit('message', 'hello');
    this.surveyFeed.listen('message').subscribe((data) => {
      console.log(data);
    });

    console.log('newfeed init bottom');
  }
}
