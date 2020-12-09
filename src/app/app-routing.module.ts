import { StoreComponent } from "./components/store/store.component";
import { AdminComponent } from "./components/admin-component/admin.component";
import { StockManagerComponent } from "./components/manage-stock/stock-manager.component";
import { CreateRecipeComponent } from "./components/create-recipe/create-recipe.component";
import { LoginComponent } from "./components/login/login.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "admin",
    component: AdminComponent,
    children: [
      { path: "create-recipe", component: CreateRecipeComponent },
      { path: "stock-manager", component: StockManagerComponent },
      { path: "**", pathMatch: "full", redirectTo: "create-recipe" },
      { path: "", pathMatch: "full", redirectTo: "create-recipe" },
    ],
  },
  { path: "login", component: LoginComponent },
  { path: "store", component: StoreComponent },

  { path: "**", pathMatch: "full", redirectTo: "store" },
  { path: "", pathMatch: "full", redirectTo: "store" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
