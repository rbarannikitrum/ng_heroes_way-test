import { Injectable } from '@angular/core';
import {IHero} from "./hero/hero.interface";
import {catchError, delay, Observable, of, tap} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  private heroesUrl = 'api/heroes'
  private heroes: Array<IHero>;
  constructor( private  messageService: MessageService,
  private http: HttpClient
  ) {
  }
  getHeroes (): Observable<Array<IHero>> {
    this.messageService.add('heroes fetched')
    return this.http.get<Array<IHero>>(this.heroesUrl)
  }
  getHero (id: number) {
    this.http.get<Array<IHero>>(this.heroesUrl).subscribe(heroes => this.heroes = heroes)
    this.messageService.add(`fetched hero: ${this.heroes[id].id} with name ${this.heroes[id].name}`)
    return of(this.heroes[id - 1])
  }

}


