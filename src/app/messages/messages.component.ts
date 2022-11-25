import { Component, OnInit } from '@angular/core';
import {MessageService} from "../message.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(public messageService: MessageService, private snackBar: MatSnackBar) { }
  // messages: Array<string> = this.messageService.messages

  ngOnInit(): void {
    this.fetchMessage()
  }

  openSnackBar (message: string, action: string) {
    this.snackBar.open(message, action, {duration : 5000})
  }
  fetchMessage () {
    this.messageService.eventStream.subscribe(message => this.openSnackBar(message as string, 'close'))
  }

}
