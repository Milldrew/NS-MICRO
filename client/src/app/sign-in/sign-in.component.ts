import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  signInForm = this.fb.group({ username: [''], password: [''] });

  ngOnInit(): void {}
  signIn() {
    const { username, password } = this.signInForm.value;
    this.authService.signIn(username, password);
  }
}
