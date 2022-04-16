import { Component, OnInit } from '@angular/core';
import { MySurveysService } from './my-surveys.service';

@Component({
  selector: 'app-my-surveys',
  templateUrl: './my-surveys.component.html',
  styleUrls: ['./my-surveys.component.css'],
})
export class MySurveysComponent implements OnInit {
  constructor(readonly getSurveys: MySurveysService) {}

  getAllMySurveys() {
    this.getSurveys.getAllMySurveys();
  }
  ngOnInit(): void {
    this.getAllMySurveys();
  }
}
