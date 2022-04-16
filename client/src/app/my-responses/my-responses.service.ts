import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from '../services/constants.service';

@Injectable({
  providedIn: 'root',
})
export class MyResponsesService {
  constructor(private http: HttpClient, private constants: ConstantsService) {}
  getAllMyResponses() {
    return this.http.get(this.constants.myResponsesUrl);
  }
}
