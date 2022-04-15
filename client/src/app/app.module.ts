import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSurveyModule } from './create-survey/create-survey.module';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsFeedModule } from './news-feed/news-feed.module';
import { SurveyComponent } from './survey/survey.component';

@NgModule({
  declarations: [AppComponent, NewsFeedComponent, SurveyComponent],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    NewsFeedModule,
    CreateSurveyModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
