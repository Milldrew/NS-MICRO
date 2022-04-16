import { Component, OnInit } from '@angular/core';
import { SurveyStoreService } from './survey-store.service';

@Component({
  selector: 'app-all-surveys',
  templateUrl: './all-surveys.component.html',
  styleUrls: ['./all-surveys.component.css'],
})
export class AllSurveysComponent implements OnInit {
  constructor(private readonly surveyStore: SurveyStoreService) {}

  ngOnInit(): void {
    this.surveyStore.getFirstPage().subscribe((value) => {
      console.log(value);
    });
  }
}
