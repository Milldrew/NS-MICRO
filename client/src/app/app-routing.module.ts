import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllSurveysComponent } from './all-surveys/all-surveys.component';
import { ChatScreenComponent } from './chat-screen/chat-screen.component';
import { CreateSurveyComponent } from './create-survey/create-survey.component';
import { AuthGuard } from './guard/auth.guard';
import { MyResponsesComponent } from './my-responses/my-responses.component';
import { MySurveysComponent } from './my-surveys/my-surveys.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { RegisterComponent } from './register/register.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  { path: '', component: SignInComponent },
  { path: 'register', component: RegisterComponent },
  {
    path: 'all-surveys',
    component: AllSurveysComponent,
    canActivate: [AuthGuard],
  },
  { path: 'chat', component: ChatScreenComponent, canActivate: [AuthGuard] },
  {
    path: 'create-survey',
    component: CreateSurveyComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-responses',
    component: MyResponsesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-surveys',
    component: MySurveysComponent,
    canActivate: [AuthGuard],
  },
  { path: 'news-feed', component: NewsFeedComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
