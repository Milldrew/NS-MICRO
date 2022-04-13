import { SocketIoModule } from 'ngx-socket-io';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SurveyFeedService } from './services/survey-feed.service';

@NgModule({
  declarations: [],
  providers: [SurveyFeedService],
  imports: [CommonModule],
})
export class NewsFeedModule {}
