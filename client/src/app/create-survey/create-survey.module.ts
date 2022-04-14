import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSurveyComponent } from './create-survey.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [CreateSurveyComponent],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [CreateSurveyComponent],
})
export class CreateSurveyModule {}
