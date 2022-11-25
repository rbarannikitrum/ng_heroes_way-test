import { Injectable } from '@angular/core';
import {of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messages: Array<string> = []
  constructor() { }
  add (message: string) {
    return of(message)
  }
  clear () {
    this.messages = []
  }
}
