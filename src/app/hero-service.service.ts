import { Injectable } from '@angular/core';
import {IHero} from "./hero/hero.interface";
import {data as heroes} from "./all-heroes/heroes.data";

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }
  getHeroes (): Array<IHero> {
    return heroes
  }
}
