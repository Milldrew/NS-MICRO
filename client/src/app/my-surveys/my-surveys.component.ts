import { Component, OnInit } from '@angular/core';
import { MySurveysService } from './my-surveys.service';

@Component({
  selector: 'app-my-surveys',
  templateUrl: './my-surveys.component.html',
  styleUrls: ['./my-surveys.component.css'],
})
export class MySurveysComponent implements OnInit {
  constructor(readonly getSurveys: MySurveysService) {}
  mySurveys: any;

  getAllMySurveys() {
    this.getSurveys.getAllMySurveys();
  }
  ngOnInit(): void {
    this.getSurveys.getAllMySurveys().subscribe((surveys: any): void => {
      console.log('hello from all my');
      console.log(surveys);
      this.mySurveys = surveys;
    });
  }
}
