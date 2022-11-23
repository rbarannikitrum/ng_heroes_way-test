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

  constructor(private heroService: HeroServiceService, private route : ActivatedRoute) {
  }

  ngOnInit() {
    const route: number = this.route.snapshot.params.id
    this.heroService.getHero(route).subscribe(hero => this.hero = hero)
  }


}
