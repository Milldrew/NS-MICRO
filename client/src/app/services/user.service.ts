import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}
  token: null | string = null;

  setToken(token: string) {
    this.token = token;
  }
  isAuthenticated() {
    return !!this.token;
  }
}
