import { IsNumber, IsString } from 'class-validator';

export class CreateSurveyDto {
  @IsString()
  question: string;
  @IsString({ each: true })
  answers: string[];
}
