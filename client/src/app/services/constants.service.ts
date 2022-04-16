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

  newsFeedPaginationUrl(offset: number, limit: number) {
    return `http://192.168.0.143:3000/survey?offset=${offset}&limit=${limit}`;
  }
}
