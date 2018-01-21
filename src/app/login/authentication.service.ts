import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() {  }
  public isLoggedIn(username: string, password: string): boolean {
    if (username === 'bibek' && password === 'secret') {
      return true;
    } else {
      return false;
    }
  }
  getMessage(): string {
    return 'Hello All!';
  }
}
