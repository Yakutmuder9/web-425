/**
 * Title: app.component.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 10 Jun 2023
 * Description: sign-in component
*/
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  isLoggedIn = false;

  constructor(private router: Router) { }

  ngOnInit(): void { }


  signin() {
    this.isLoggedIn = true;
    this.router.navigate(['/home'], { queryParams: { isLoggedIn: this.isLoggedIn }, skipLocationChange: true });
  }
}
