import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from '../services/constants.service';

@Injectable({
  providedIn: 'root',
})
export class SurveyStoreService {
  offset: number = 0;
  limit: number = 5;
  allSurveys: any[] = [];
  nextPageOfSurveys: any[] = [];
  constructor(
    private readonly constants: ConstantsService,
    private http: HttpClient
  ) {}

  getFirstPage() {
    return this.http.get(
      this.constants.allSurveysPaginationUrl(this.offset, this.limit)
    );
  }
}
