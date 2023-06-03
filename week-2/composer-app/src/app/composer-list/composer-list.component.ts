/**
 * Title: composer-list.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 02 Jun 2023
 * Description: composer component
*/

import { Component, OnInit } from '@angular/core';

export default class Composer {
  fullName: string;
  genre: string;

  constructor(fullName: string, genre: string) {
    this.fullName = fullName;
    this.genre = genre;
  }

}
@Component({
  selector: 'app-composer-list',
  templateUrl: './composer-list.component.html',
  styleUrls: ['./composer-list.component.css']
})
export class ComposerListComponent implements OnInit {

  composers: Array<Composer>;

  constructor() {
    this.composers = [
      new Composer("Pyotr Ilyich Tchaikovsky", "Classical"),
      new Composer("George Frideric Handel", "Classical"),
      new Composer("Igor Stravinsky", "Classical"),
      new Composer("Antonio Vivaldi", "Classical"),
      new Composer("Franz Joseph Haydn", "Classical"),
    ]
  }

  ngOnInit(): void {
  }

}
