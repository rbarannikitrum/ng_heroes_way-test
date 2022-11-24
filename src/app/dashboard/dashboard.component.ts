import { Component, OnInit } from '@angular/core';
import {IHero} from "../hero/hero.interface";
import {HeroServiceService} from "../hero-service.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes : Array<IHero> = []
  constructor(public heroService : HeroServiceService) {
  }

  ngOnInit(): void {
    this.getHeroes()
  }

  getHeroes () {
    return this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes.slice(0, 5))
  }

}
