import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MySurveysService {
  constructor(private http: HttpClient) {}
  getAllMySurveys() {
    console.log('get my surveys');
  }
}
