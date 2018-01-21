import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../authentication.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})
export class AuthenticationComponent implements OnInit {
  isLoggedIn = false;
  message: string;
  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    /*this.isLoggedIn = this.authenticationService.isLoggedIn(this.username);*/
    this.message = this.authenticationService.getMessage();
  }

  login(username: string, password: string) {
    this.isLoggedIn = this.authenticationService.isLoggedIn(username, password);
  }
}
