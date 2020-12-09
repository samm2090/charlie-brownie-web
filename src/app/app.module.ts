import { ProductsComponent } from "./components/products/products.component";
import { RecipesComponent } from "./components/recipes/recipes.component";
import { StoreComponent } from "./components/store/store.component";
import { AdminComponent } from "./components/admin-component/admin.component";
import { StockManagerComponent } from "./components/manage-stock/stock-manager.component";
import { OverlayModule } from "@angular/cdk/overlay";
import { CreateRecipeComponent } from "./components/create-recipe/create-recipe.component";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./components/login/login.component";
import { MatSpinner } from "@angular/material";
import { MaterialModule } from "./material.module";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { FlexLayoutModule } from "@angular/flex-layout";
import { HttpClientModule } from "@angular/common/http";
import { CdkTableModule } from "@angular/cdk/table";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CreateRecipeComponent,
    StockManagerComponent,
    AdminComponent,
    StoreComponent,
    RecipesComponent,
    ProductsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    CdkTableModule,
    FlexLayoutModule,
    OverlayModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [MatSpinner],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
