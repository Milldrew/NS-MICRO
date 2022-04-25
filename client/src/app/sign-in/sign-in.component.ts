import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private fb: FormBuilder) {}

  signInForm = this.fb.group({ username: [''], password: [''] });

  ngOnInit(): void {}
  signIn() {
    alert(JSON.stringify(this.signInForm.value));
  }
}
