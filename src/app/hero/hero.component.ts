import {Component, Input, OnInit} from '@angular/core';
import {IHero} from "./hero.interface";
import {MessageService} from "../message.service";


@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }
  @Input() hero:  IHero
}
