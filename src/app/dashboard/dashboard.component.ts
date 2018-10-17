import { Component, OnInit } from '@angular/core';
import { ENV } from '../core/env.config';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {


  constructor() { }

  ngOnInit() {
  console.log(ENV);
  }

}
