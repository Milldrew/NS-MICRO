import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';

const routes: Routes = [
  { path: 'newsfeed', component: NewsFeedComponent },
  { path: 'create-survey', component: CreateSurveyComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
