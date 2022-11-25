import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import {Observable, Observer, of, PartialObserver, Subject, Subscriber} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  eventStream = new Subject()
  messages: Array<string> = []
  private snackBar: MatSnackBar
  subscription = this.eventStream.subscribe((x: any) => {
    console.log(x)
  })

  constructor() { }
  add (message: string) {
    this.eventStream.next(message)
  }
  clear () {
    // this.messages = []
  }
}
