import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSurveyComponent } from './create-survey.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSurveyService } from './create-survey.service';

@NgModule({
  declarations: [CreateSurveyComponent],
  providers: [CreateSurveyService],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CreateSurveyComponent],
})
export class CreateSurveyModule {}
