import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateSurveyModule } from './create-survey/create-survey.module';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsFeedModule } from './news-feed/news-feed.module';
import { SurveyComponent } from './survey/survey.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { MenuItemComponent } from './nav-drawer/menu-item/menu-item.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';
import { MySurveysComponent } from './my-surveys/my-surveys.component';
import { MyResponsesComponent } from './my-responses/my-responses.component';

@NgModule({
  declarations: [AppComponent, NewsFeedComponent, SurveyComponent, NavDrawerComponent, MenuItemComponent, ChatScreenComponent, AllSurveysComponent, MySurveysComponent, MyResponsesComponent],
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
