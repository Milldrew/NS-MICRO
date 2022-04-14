import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-create-survey',
  templateUrl: './create-survey.component.html',
  styleUrls: ['./create-survey.component.css'],
})
export class CreateSurveyComponent implements OnInit {
  constructor(private fb: FormBuilder) {}
  createSurveyForm = this.fb.group({
    surveyName: [''],
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

  ngOnInit(): void {}
}
