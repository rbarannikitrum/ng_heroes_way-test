import {Component, DoCheck, OnChanges, OnInit} from '@angular/core';
import {MessageService} from "../message.service";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements DoCheck  {


  constructor(public messageService: MessageService, private snackBar: MatSnackBar) { }
  messages: Array<string> = this.messageService.messages
  ngDoCheck(): void {
    // this.messages.forEach(el => {
    //   this.openSnackBar(el,   'close')
    // })
  }

  openSnackBar (message: string, action: string) {
    this.snackBar.open(message, action, {duration : 5000})
  }

}
