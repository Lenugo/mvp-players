import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./pages-routing.module";
import { RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { PagesComponent } from "./pages.component";
import { AmericanComponent } from "./american/american.component";
import { NationalComponent } from "./national/national.component";
import { PlayersComponent } from "../components/players/players.component";
import { HeaderComponent } from "../shared/header/header.component";

@NgModule({
  declarations: [PagesComponent, HomeComponent, AmericanComponent, NationalComponent, PlayersComponent, HeaderComponent],
  imports: [CommonModule, RouterModule, PagesRoutingModule],
  exports: [PagesComponent, HomeComponent],
})
export class PagesModule {}
