import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';

export type CreateResponseDto = {
  surveyId: number;
  answerIndex: number;
};

@Injectable({
  providedIn: 'root',
})
export class CreateResponseService {
  constructor(
    private readonly constants: ConstantsService,
    private http: HttpClient
  ) {}
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  addResponse(createResponseDto: CreateResponseDto) {
    console.log({ createResponseDto }, 'from service');
    return this.http.post<CreateResponseDto>(
      this.constants.responseUrl,
      createResponseDto
    );
  }
}
