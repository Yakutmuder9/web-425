/**
 * Title: composer-list.service.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 17 Jun 2023
 * Description: composer service
*/

import { Injectable } from '@angular/core';
import { IComposer } from './composer.interface';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

Observable
@Injectable({
  providedIn: 'root'
})
export class ComposerService {

  composers: Array<IComposer>;

  constructor() {
    this.composers = [
      { composerId: 100, fullName: 'Pyotr Ilyich Tchaikovsky', genre: 'Classical' },
      { composerId: 101, fullName: 'George Frideric Handel', genre: 'Classical' },
      { composerId: 102, fullName: 'Igor Stravinsky', genre: 'Classical' },
      { composerId: 103, fullName: 'Antonio Vivaldi', genre: 'Classical' },
      { composerId: 104, fullName: 'Franz Joseph Haydn', genre: 'Classical' },
    ];
  }

  getComposers(): Observable<IComposer[]> {
    return of(this.composers);
  }

  getComposer(composerId: number): IComposer {
    for (let composer of this.composers) {
      if (composer.composerId === composerId) {
        return composer;
      }
    }
    return {} as IComposer;
  }

  filterComposers(name: string): Observable<IComposer[]> {
    return of(this.composers).pipe(map(composers => composers.filter(composer => composer.fullName.toLowerCase().indexOf(name) > -1)))
  }
}
