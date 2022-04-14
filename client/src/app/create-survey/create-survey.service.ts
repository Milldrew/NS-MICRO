import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { AppConstants, APP_CONSTANTS } from '../app.config';

@Injectable({
  providedIn: 'root',
})
export class CreateSurveyService {
  //surveyUrl;
  /*
  constructor(
    private http: HttpClient,
    @Inject(APP_CONSTANTS) constants: AppConstants
  ) {
    this.surveyUrl = constants.surveyEndpoint;
  }

  addSurvey() {
    console.log(this.surveyUrl);
    //return this.http.post<Survey>();
  }
  */
}
