import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  constructor(private userService: UserService) {}
  httpAuthHeader() {
    console.log(this.userService.getToken(), 'token from auth header');
    return {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.userService.getToken()}`,
      }),
    };
  }

  register = `http://192.168.0.143:3000/user`;
  signInUrl = `http://192.168.0.143:3000/auth/login`;
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
