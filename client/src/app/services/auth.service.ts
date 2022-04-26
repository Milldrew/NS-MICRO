import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private constants: ConstantsService,
    private userService: UserService
  ) {}
  signIn(username: string, password: string) {
    this.http
      .post(this.constants.signInUrl, {
        username,
        password,
      })
      .subscribe(
        (value: any) => {
          console.log(value);
          console.log(value['access_token']);
          const token = value['access_token'];
          this.userService.setToken(token);
        },
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
