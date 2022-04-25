import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { MyResponsesComponent } from './my-responses/my-responses.component';
import { MySurveysComponent } from './my-surveys/my-surveys.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'all-surveys', component: AllSurveysComponent },
  { path: 'chat', component: ChatScreenComponent },
  { path: 'create-survey', component: CreateSurveyComponent },
  { path: 'my-responses', component: MyResponsesComponent },
  { path: 'my-surveys', component: MySurveysComponent },
  { path: 'news-feed', component: NewsFeedComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
