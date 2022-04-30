import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  token: null | string = null;
  username = '';
  getUsername() {
    return this.username;
  }
  setUsername(name: string) {
    this.username = name;
  }
  getToken() {
    return this.token;
  }
  setToken(token: string) {
    this.token = token;
  }
  isAuthenticated() {
    return !!this.token;
  }
}
