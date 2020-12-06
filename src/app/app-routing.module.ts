import { StockManagerComponent } from "./components/manage-stock/stock-manager.component";
import { CreateRecipeComponent } from "./components/create-recipe/create-recipe.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "create-recipe", component: CreateRecipeComponent },
  { path: "stock-manager", component: StockManagerComponent },
  { path: "**", pathMatch: "full", redirectTo: "login" },
  { path: "", pathMatch: "full", redirectTo: "login" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
