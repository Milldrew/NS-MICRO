import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';
import { SurveyFeedService } from '../news-feed/services/survey-feed.service';
import { CreateSurveyService } from './create-survey.service';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
})
export class CreateSurveyComponent implements OnInit {
  constructor(
    private surveyFeed: SurveyFeedService,
    private fb: FormBuilder,
    private readonly surveyApi: CreateSurveyService
  ) {}
  createSurveyForm = this.fb.group({
    question: [''],
    answers: this.fb.array([this.fb.control('')]),
  });
  answerLetters = [
    'A',
    'B',
    'C',
    'D',
    'E',
    'F',
    'G',
    'H',
    'I',
    'J',
    'K',
    'L',
    'M',
    'N',
    'O',
    'P',
    'Q',
    'R',
    'S',
    'T',
    'U',
    'V',
    'W',
    'X',
    'Y',
    'Z',
  ];
  get answers() {
    return this.createSurveyForm.get('answers') as FormArray;
  }
  addAnswer() {
    this.answers.push(this.fb.control(''));
  }

  createSurvey() {
    console.log('create actio');
    this.surveyApi
      .addSurvey({ authorId: 1, ...this.createSurveyForm.value })
      .subscribe((newSurvey: any) => {
        const { authorId, ...surveyData } = newSurvey;
        this.surveyFeed.emit('newsFeed', { username: 'bob', ...surveyData });
      });
  }
  ngOnInit(): void {}
}
