import {Component, Input, OnInit} from '@angular/core';
import {IHero} from "../hero/hero.interface";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() hero: IHero
  @Input() edit: boolean

}
