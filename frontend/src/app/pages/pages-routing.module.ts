import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AmericanComponent } from "./american/american.component";
import { HomeComponent } from "./home/home.component";
import { NationalComponent } from "./national/national.component";
import { PagesComponent } from "./pages.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      { path: "american", component: AmericanComponent },
      { path: "national", component: NationalComponent },
      { path: "profile", component: ProfileComponent },
    ],
  },
  { path: "home", component: HomeComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
