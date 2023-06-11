/**
 * Title: composer-list.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 10 Jun 2023
 * Description: composer component
*/

import { IComposer } from './composer.interface';

export class Composer {
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

    getComposers() {
        return this.composers;
    }

    getComposer(composerId: number): IComposer {
        for (let composer of this.composers) {
            if (composer.composerId === composerId) {
                return composer;
            }
        }
        return {} as IComposer;
    }
}