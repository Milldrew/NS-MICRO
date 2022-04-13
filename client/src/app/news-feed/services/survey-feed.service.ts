import { io } from 'socket.io-client';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SurveyFeedService {
  uri: string = `ws://192.168.0.143:3002`;
  constructor() {
    this.socket = io(this.uri);
  }
  socket: any;

  listen(eventName: string) {
    return new Observable((subscriber) => {
      this.socket.on(eventName, (data: any) => {
        subscriber.next(data);
      });
    });
  }

  emit(eventName: string, data: any) {
    this.socket.emit(eventName, data);
  }
}
