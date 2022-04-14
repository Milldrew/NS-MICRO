import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
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
    private readonly constants: ConstantsService,
    private http: HttpClient
  ) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };
  addSurvey(createSurveyDto: CreateSurveyDto) {
    console.log(this.constants.surveyUrl);
    console.log(createSurveyDto);
    return this.http
      .post<CreateSurveyDto>(
        this.constants.surveyUrl,
        createSurveyDto,
        this.httpOptions
      )
      .subscribe((value) => console.log(value));
  }
}
