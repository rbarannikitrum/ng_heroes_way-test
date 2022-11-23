import {Component, Input, OnInit} from '@angular/core';
import {IHero} from "../hero/hero.interface";
import {HeroServiceService} from "../hero-service.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css']
})
export class HeroDetailsComponent implements OnInit {
  hero: IHero
  constructor(
    private heroService: HeroServiceService,
    private location: Location,
    private route: ActivatedRoute
  ) {

  }

  ngOnInit(): void {
    this.getHero()
  }
  getHero () {
      this.heroService.getHero(2).subscribe(hero => this.hero = hero)
  }


}
