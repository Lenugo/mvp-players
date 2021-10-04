import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PagesRoutingModule } from "./pages/pages-routing.module";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [{ path: "**", component: NotFoundComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
