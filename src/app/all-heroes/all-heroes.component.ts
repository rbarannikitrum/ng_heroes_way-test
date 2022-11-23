import { Component, OnInit } from '@angular/core';
import {IHero} from "../hero/hero.interface";
import {data} from "./heroes.data";

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.css']
})
export class AllHeroesComponent implements OnInit {
  heroes : Array<IHero> = data
  constructor() { }

  ngOnInit(): void {
  }

}
