import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AmericanComponent } from "./american/american.component";
import { HomeComponent } from "./home/home.component";
import { NationalComponent } from "./national/national.component";
import { ProfileComponent } from "./profile/profile.component";

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "american", component: AmericanComponent },
  { path: "national", component: NationalComponent },
  { path: "profile", component: ProfileComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
