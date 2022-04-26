import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  constructor(private fb: FormBuilder, private authService: AuthService) {}

  registerForm = this.fb.group({ username: [''], password: [''] });

  ngOnInit(): void {}
  register() {
    const { username, password } = this.registerForm.value;
    this.authService.register(username, password);
  }
}
