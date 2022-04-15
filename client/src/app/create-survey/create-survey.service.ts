import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { SurveyFeedService } from '../news-feed/services/survey-feed.service';
import { ConstantsService } from '../services/constants.service';

type CreateSurveyDto = {
  authorId: number;
  name: string;
  question: string;
  answers: string[];
};
@Injectable({
  providedIn: 'root',
})
export class CreateSurveyService {
  constructor(
    private readonly surveyFeed: SurveyFeedService,
    private readonly constants: ConstantsService,
    private http: HttpClient
  ) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  addSurvey(createSurveyDto: CreateSurveyDto) {
    console.log(this.constants.surveyUrl);
    console.log(createSurveyDto);
    this.http
      .post<CreateSurveyDto>(
        this.constants.surveyUrl,
        createSurveyDto,
        this.httpOptions
      )
      .subscribe((newSurvey) => {
        this.surveyFeed.emit('newsFeed', newSurvey);
      });
  }
}
