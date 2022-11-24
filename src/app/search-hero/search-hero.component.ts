import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {IHero} from "../hero/hero.interface";
import {HeroServiceService} from "../hero-service.service";

@Component({
  selector: 'app-search-hero',
  templateUrl: './search-hero.component.html',
  styleUrls: ['./search-hero.component.css']
})
export class SearchHeroComponent implements OnInit {
  heroes$: Observable<Array<IHero>>
  searchString: string
  constructor(private heroService: HeroServiceService) { }

  ngOnInit(): void {
  }
  search(str: string) {
    this.heroes$ = this.heroService.searchHero(str)
    console.log(this.heroes$)
  }

}
