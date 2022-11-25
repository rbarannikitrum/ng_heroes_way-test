import { Injectable } from '@angular/core';
import {IHero} from "./hero/hero.interface";
import {catchError, delay, Observable, of, tap} from "rxjs";
import {MessageService} from "./message.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HeroServiceService {
  public loaded: boolean = true
  private heroesUrl = 'api/heroes'
  private httpOptions: { headers: HttpHeaders } = {headers : new HttpHeaders({ 'Content-Type': 'application/json' })}
  private heroes: Array<IHero>;
  constructor( private  messageService: MessageService,
  private http: HttpClient
  ) {}

  getHeroes (): Observable<Array<IHero>> {
    this.loaded = false
    this.messageService.add('heroes fetched')
    return this.http.get<Array<IHero>>(this.heroesUrl).pipe(delay(1000)).pipe(tap(() => this.loaded = true))
  }
  getHero (id: number) {
    const uri = `api/heroes/${id}`

    return this.http.get<IHero>(uri)
  }
  updateHero(hero: IHero) {
    return this.http.put(this.heroesUrl, hero, this.httpOptions).pipe(tap(() => this.log(`updated hero ${hero.id} ${hero.name}`)))
  }
  addHero (hero: IHero) {
    return this.http.post<IHero>(this.heroesUrl, hero, this.httpOptions).pipe(tap((newHero: IHero) => this.messageService.add(`added hero ${newHero.id} ${newHero.name}`)))
  }
  deleteHero (hero: IHero) {
    const id = hero.id
    const url = `${this.heroesUrl}/${id}`
    return this.http.delete<IHero>(url, this.httpOptions).pipe(tap(() => this.messageService.add(`deleted: ${id}, ${hero.name}`)))
  }
  searchHero(searchString: string) {
    if (!searchString.trim()) {
      return of([])
    }
    return this.http.get<Array<IHero>>(`${this.heroesUrl}/?name=${searchString}`).pipe(
      tap(result => result.length ? this.messageService.add(`found heroes matching ${searchString}`) :
        this.messageService.add('nothing found'))
    )
  }
  log(message: string) {
    this.messageService.add(message)
  }

}


