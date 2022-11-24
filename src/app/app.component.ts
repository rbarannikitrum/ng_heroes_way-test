import { Component } from '@angular/core';
import {HeroServiceService} from "./hero-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'heroes';
  constructor() {
  }
  goBack () {
    history.back()
  }

}
