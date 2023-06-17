/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 02 Jun 2023
 * Description: App component Module
 * Assignment: Exercise 4.2 - Inversion of Control and Dependency Injection
*/

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  assignment: string = 'Exercise 4.2 - Inversion of Control and Dependency Injection';
}
