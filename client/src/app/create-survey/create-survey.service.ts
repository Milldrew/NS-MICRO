import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CreateSurveyService {
  constructor() {}

  addSurvey() {
    console.log('hello');
    //return this.http.post<Survey>();
  }
}
