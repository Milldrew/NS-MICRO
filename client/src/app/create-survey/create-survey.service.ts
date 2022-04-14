import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { ConstantsService } from '../services/constants.service';

type CreateSurveyDto = {
  authorId: number;
  name: string;
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
  addSurvey() {
    console.log(this.constants.surveyUrl);
    return this.http
      .post(this.constants.surveyUrl, { foo: 'foo' })
      .subscribe((value) => console.log(value));
  }
}
