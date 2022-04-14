import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSurveyModule } from './create-survey/create-survey.module';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsFeedModule } from './news-feed/news-feed.module';

@NgModule({
  declarations: [AppComponent, NewsFeedComponent],
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
