import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Message} from '../model/message';
import {tap} from 'rxjs/operators';
import { MessageServices } from './messages.servies';

@Component({
  selector: 'messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css'],
  
})
export class MessagesComponent implements OnInit {
 showMessages = false;
errors$:Observable<string[]>
  constructor(public messagesService:MessageServices) {
    console.log("created messages componet")

  }

  ngOnInit() {
this.errors$ = this.messagesService.errors$.pipe(
  tap(()=>{
    this.showMessages =true
  })
)

  }
;

  onClose() {
this.showMessages =false

  }

}
