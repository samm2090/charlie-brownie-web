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
import { NoopAnimationsModule } from "@angular/platform-browser/animations";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CdkTableModule,
    MaterialModule,
    FlexLayoutModule,
    NoopAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  entryComponents: [MatSpinner],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
