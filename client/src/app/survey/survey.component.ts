import { Component, Input, OnInit } from '@angular/core';
import {
  CreateResponseDto,
  CreateResponseService,
} from '../services/create-response.service';

@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css'],
})
export class SurveyComponent implements OnInit {
  questionId = [
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
  constructor(private readonly createResponseService: CreateResponseService) {}

  @Input()
  surveyData: any;
  ngOnInit(): void {}

  createResponse(createResponseDto: CreateResponseDto) {
    this.createResponseService
      .addResponse(createResponseDto)
      .subscribe((value) => {
        console.log(value);
      });
  }
}
