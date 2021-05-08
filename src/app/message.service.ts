import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Detail } from './detail';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  // private messageSource = new BehaviorSubject({});
  // currentMessage = this.messageSource.asObservable();

  // constructor() { }

  // changeMessage(message: Detail) {
  //   this.messageSource.next(message)
  // }
}
