import { Injectable } from '@angular/core';
import {IHero} from "./hero/hero.interface";
import {data as heroes} from "./all-heroes/heroes.data";
import {Observable, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {

  constructor() { }
  getHeroes (): Observable<Array<IHero>> {
    return of(heroes)
  }
}
