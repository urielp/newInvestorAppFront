import {Component, OnInit} from '@angular/core';
import {AuthService} from './auth/authenticate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-material-dashboard';
  isUserLoggedIn = false;

  constructor(private loginSerive: AuthService) {

  }

  ngOnInit() {

  }
}
