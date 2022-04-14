import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
})
export class CreateSurveyComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  createSurveyForm = this.fb.group({
    surveyName: [''],
  });

  ngOnInit(): void {}
}
