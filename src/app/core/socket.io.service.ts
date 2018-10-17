import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import {Observable} from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class SocketIoService {

  private url = 'http://localhost:8080';
  private socket;
  constructor() { }
  getUpdate() {
    let observable = new Observable(obsever => {
      this.socket = io(this.url);
      this.socket.on('update', (message) => {
        obsever.next(message);
      });
      return () => {
        this.socket.disconnect();
      };
    });
    return observable;
  }
}
