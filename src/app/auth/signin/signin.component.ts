import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {AuthService} from '../authenticate.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  isUserLogin = false;
  constructor(private loginServie: AuthService, private router: Router) { }

  ngOnInit() {
  }

  onSignIn(form: NgForm) {

  }

  signIn() {
    console.log('signin');
    this.loginServie.login();
    this.router.navigate(['./dashboard']).then(e => {
      console.log(e)
    }).catch((ex)=>{
      console.log(ex);
    });

  }
}
