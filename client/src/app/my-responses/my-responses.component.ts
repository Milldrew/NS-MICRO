import { Component, OnInit } from '@angular/core';
import { MyResponsesService } from './my-responses.service';

@Component({
  selector: 'app-my-responses',
  templateUrl: './my-responses.component.html',
  styleUrls: ['./my-responses.component.css'],
})
export class MyResponsesComponent implements OnInit {
  constructor(readonly getResponses: MyResponsesService) {}
  myResponses: any = [{ foo: 'foo' }];

  getAllMyResponses() {
    this.getResponses.getAllMyResponses();
  }
  ngOnInit(): void {
    this.getResponses.getAllMyResponses().subscribe((responses: any): void => {
      this.myResponses = responses;
    });
  }
}
