import { Component, OnInit } from '@angular/core';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
  private socket;
  constructor() { }

  ngOnInit() {
  // this.socket = io.connect('http://localhost:8080');
  }

}
