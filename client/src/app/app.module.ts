import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewsFeedComponent } from './news-feed/news-feed.component';
import { NewsFeedModule } from './news-feed/news-feed.module';

@NgModule({
  declarations: [AppComponent, NewsFeedComponent],
  imports: [BrowserModule, AppRoutingModule, NewsFeedModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
