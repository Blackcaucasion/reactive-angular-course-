import {Component, OnInit} from '@angular/core';
import { LoadingService } from './loading/loading.service';
import { MessageServices } from './messages/messages.servies';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit {

    constructor() {

    }

    ngOnInit() {


    }

  logout() {

  }

}
