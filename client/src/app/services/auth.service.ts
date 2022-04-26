import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private constants: ConstantsService) {}
  signIn(username: string, password: string) {
    this.http
      .post(this.constants.signInUrl, {
        username,
        password,
      })
      .subscribe(
        (value) => console.log(value),
        (warn) => console.warn(warn)
      );
  }

  register(username: string, password: string) {
    console.log({ username, password });
    this.http
      .post(this.constants.register, {
        username,
        password,
      })
      .subscribe(
        (value) => console.log(value),
        (warn) => console.warn(warn)
      );
  }
}
