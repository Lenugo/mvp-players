import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AmericanComponent } from "./american/american.component";
import { HomeComponent } from "./home/home.component";
import { NationalComponent } from "./national/national.component";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "american", component: AmericanComponent },
  { path: "national", component: NationalComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
