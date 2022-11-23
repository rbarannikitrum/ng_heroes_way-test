import { Injectable } from '@angular/core';
import {IHero} from "./hero/hero.interface";
import {data as heroes} from "./all-heroes/heroes.data";
import {delay, Observable, of} from "rxjs";
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  constructor( private  messageService: MessageService) {

  }
  getHeroes (): Observable<Array<IHero>> {
    this.messageService.add('heroes fetched')
    return of(heroes)
  }
  getHero (id: number) {
    this.messageService.add(`fetched hero: ${heroes[id].id} with name ${heroes[id].name}`)
    return of(heroes[id - 1])
  }
}


