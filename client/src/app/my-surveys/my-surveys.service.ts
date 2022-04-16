import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from '../services/constants.service';

@Injectable({
  providedIn: 'root',
})
export class MySurveysService {
  constructor(private http: HttpClient, private constants: ConstantsService) {}
  getAllMySurveys() {
    return this.http.get(this.constants.mySurveysUrl);
  }
}
