import { Injectable } from '@angular/core';

@Injectable()
export class AuthenticationService {

  constructor() {  }
  public isLoggedIn(username: string): boolean {
    if (username === 'AA') {
      return true;
    } else {
      return false;
    }
  }
  getMessage(): string {
    return 'Hello All!';
  }
}
