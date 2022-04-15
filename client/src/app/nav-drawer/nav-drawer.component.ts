import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css'],
})
export class NavDrawerComponent implements OnInit {
  isOpen: boolean = true;
  menuItems = [
    {
      name: 'My Surveys',
      route: 'my-surveys',
    },
    {
      name: 'My Responses',
      route: 'my-responses',
    },
    {
      name: 'News Feed',
      route: 'news-feed',
    },
    {
      name: 'all surveys',
      route: 'all-surveys',
    },
  ];
  constructor() {}

  toggleDrawer() {
    this.isOpen = !this.isOpen;
  }
  ngOnInit(): void {}
}
