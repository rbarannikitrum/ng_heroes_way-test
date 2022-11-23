import {Component, Input, OnInit} from '@angular/core';
import {IHero} from "./hero.interface";

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() hero: IHero
  edit: boolean = false
}
