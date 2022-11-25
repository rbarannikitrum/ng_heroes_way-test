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


  constructor() { }
  add (message: string) {
    this.eventStream.next(message)

  }

}
