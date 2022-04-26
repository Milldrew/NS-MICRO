import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ConstantsService } from './constants.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private constants: ConstantsService) {}
  signIn() {
    console.log('signin service');
  }

  register(username: string, password: string) {
    console.log('regiser service');
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
