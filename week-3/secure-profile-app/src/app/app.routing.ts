/**
 * Title: app.routing.ts
 * Author: Professor Krasso
 * ModifiedBy: Yakut Ahmedin
 * Date: 10 Jun 2023
 * Description: App routing
*/
import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component"
import { SignInComponent } from "./sign-in/sign-in.component"

export const AppRoutes: Routes = [
    {
        path: "",
        component: SignInComponent
    },
    {
        path: "home",
        component: HomeComponent
    }
]