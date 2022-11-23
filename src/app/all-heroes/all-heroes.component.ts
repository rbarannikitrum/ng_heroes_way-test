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
  heroService : HeroServiceService
  constructor(heroService: HeroServiceService) {
    this.heroService = heroService
  }

  ngOnInit(): void {
    this.getHeroes()
  }
  getHeroes () {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
