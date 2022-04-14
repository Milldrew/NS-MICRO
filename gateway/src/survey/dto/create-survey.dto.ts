import { IsNumber, IsString } from 'class-validator';

export class CreateSurveyDto {
  @IsNumber()
  authorId: number;
  @IsString()
  question: string;
  @IsString({ each: true })
  answers: string[];
}
