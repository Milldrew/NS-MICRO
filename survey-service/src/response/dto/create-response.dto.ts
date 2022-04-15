import { IsNumber } from 'class-validator';

export class CreateResponseDto {
  @IsNumber()
  surveyId: number;
  @IsNumber()
  answerIndex: number;
}
