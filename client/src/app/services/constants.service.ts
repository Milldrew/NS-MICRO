import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  responseUrl = `http://192.168.0.143:3000/response`;
  surveyUrl = `http://192.168.0.143:3000/survey`;
  myResponsesUrl = `http://192.168.0.143:3000/response/my`;
  mySurveysUrl = `http://192.168.0.143:3000/survey/my`;
  newsFeedUri = `ws://192.168.0.143:3002`;

  firstPageOfSurveys(limit: number) {
    return `http://192.168.0.143:3000/survey?limit=${limit}`;
  }
  allSurveysPaginationUrl(offset: number, limit: number) {
    return `http://192.168.0.143:3000/survey?limit=${limit}&offset=${offset}`;
  }
}
