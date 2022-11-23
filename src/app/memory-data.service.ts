import { Injectable } from '@angular/core';
import {IHero} from "./hero/hero.interface";

@Injectable({
  providedIn: 'root'
})
export class MemoryDataService {

  constructor() { }

  createDb () {
    const heroes: Array<IHero> = [
      { id: 1, name: 'Dr Nice' },
      { id: 2, name: 'Narco' },
      { id: 3, name: 'Bombasto' },
      { id: 4, name: 'Celeritas' },
      { id: 5, name: 'Magneta' },
      { id: 6, name: 'RubberMan' },
      { id: 7, name: 'Dynama' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Magma' },
      { id: 10, name: 'Tornado' }
    ]
    return {heroes}
  }
  genId (heroes: Array<IHero>) {
    return heroes.length > 0 ? Math.max(...heroes.map(el => el.id)) + 1 : 11
  }
}
