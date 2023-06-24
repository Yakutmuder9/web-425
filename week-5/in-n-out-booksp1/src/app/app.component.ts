/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 24 Jun 2023
 * Description:  In-N-Out-BookSp1 App
*/
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  assignment: string;

  constructor() {
    this.assignment = 'Exercise 5.3 - Navigation and Layout'
  }
}
