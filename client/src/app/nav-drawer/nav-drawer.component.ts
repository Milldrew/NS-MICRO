import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-drawer',
  templateUrl: './nav-drawer.component.html',
  styleUrls: ['./nav-drawer.component.css'],
})
export class NavDrawerComponent implements OnInit {
  isOpen: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
