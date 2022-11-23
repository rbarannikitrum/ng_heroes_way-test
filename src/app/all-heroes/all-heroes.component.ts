import { Component, OnInit } from '@angular/core';
import {HeroServiceService} from "../hero-service.service";
import {IHero} from "../hero/hero.interface";

@Component({
  selector: 'app-all-heroes',
  templateUrl: './all-heroes.component.html',
  styleUrls: ['./all-heroes.component.css']
})
export class AllHeroesComponent implements OnInit {
  heroes : Array<IHero>
  constructor(private heroService: HeroServiceService) { }

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes () {
    this.heroes = this.heroService.getHeroes()
  }

}
