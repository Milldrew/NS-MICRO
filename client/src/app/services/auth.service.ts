import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}
  signIn() {
    console.log('signin service');
  }

  register() {
    console.log('regiser service');
  }
}
