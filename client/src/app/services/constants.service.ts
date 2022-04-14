import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConstantsService {
  surveyUrl = `http://192.168.0.143:3000/survey`;
  newsFeedUri = `ws://192.168.0.143:3002`;
}
