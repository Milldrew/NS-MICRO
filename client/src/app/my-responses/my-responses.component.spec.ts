import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyResponsesComponent } from './my-responses.component';

describe('MyResponsesComponent', () => {
  let component: MyResponsesComponent;
  let fixture: ComponentFixture<MyResponsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyResponsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyResponsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
