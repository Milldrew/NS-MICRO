import { Component, OnInit } from '@angular/core';
import { SurveyFeedService } from './services/survey-feed.service';

@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css'],
})
export class NewsFeedComponent implements OnInit {
  constructor(private surveyFeed: SurveyFeedService) {}

  ngOnInit(): void {
    console.log('newfeed init top');
    this.surveyFeed.emit('message', 'hello');
    this.surveyFeed.listen('message').subscribe((data) => {
      console.log(data);
    });

    console.log('newfeed init bottom');
  }
}
