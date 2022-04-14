import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateSurveyComponent } from './create-survey.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CreateSurveyService } from './create-survey.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CreateSurveyComponent],
  providers: [CreateSurveyService],
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],
  exports: [CreateSurveyComponent],
})
export class CreateSurveyModule {}
