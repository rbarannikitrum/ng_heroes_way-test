import { Injectable } from '@angular/core';
import {IHero} from "./hero/hero.interface";
import {delay, Observable, of} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  private heroesUrl = 'api/heroes'
  constructor( private  messageService: MessageService,
  private http: HttpClient
  ) {

  }
  getHeroes (): Observable<Array<IHero>> {
    this.messageService.add('heroes fetched')
    return this.http.get<Array<IHero>>(this.heroesUrl)
  }
  getHero (id: number) {
    this.messageService.add(`fetched hero: ${heroes[id].id} with name ${heroes[id].name}`)
    return of(heroes[id - 1])
  }
  log (message: string) {
    this.messageService.add(`heroService: ${message}`)
  }
}


