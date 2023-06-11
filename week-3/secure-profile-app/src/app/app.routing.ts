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