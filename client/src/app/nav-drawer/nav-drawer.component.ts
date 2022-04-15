import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css'],
})
export class NavDrawerComponent implements OnInit {
  isOpen: boolean = false;
  menuItems = [
    {
      name: 'My Surveys',
      path: 'my-surveys',
    },
    {
      name: 'My Responses',
      path: 'my-responses',
    },
    {
      name: 'News Feed',
      path: 'news-feed',
    },
    {
      name: 'all surveys',
      path: 'all-surveys',
    },
    {
      name: 'create survey',
      path: 'create-survey',
    },
    {
      name: 'chat',
      path: 'chat',
    },
  ];
  constructor() {}

  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {}
}
