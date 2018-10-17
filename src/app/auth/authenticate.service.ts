import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  isUserLoggedIn = false;


  //isUserLoggedIn = false;


  login() {
    this.isUserLoggedIn = true;
    localStorage.setItem('auth', String(true));
    console.log("is user -" + this.isUserLoggedIn );
  }

  getUserStatus() {
    return localStorage.getItem('auth');// this.isUserLoggedIn;
}
}

