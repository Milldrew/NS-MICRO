import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
})
export class SignInComponent implements OnInit {
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  signInForm = this.fb.group({ username: [''], password: [''] });

  ngOnInit(): void {}
  signIn() {
    const { username, password } = this.signInForm.value;
    this.authService.signIn(username, password);
    this.router.navigate(['my-surveys']);
  }
}
