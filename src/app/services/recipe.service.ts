import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private recipeEndpoint = `${environment.apiHost}/recipe`;

  constructor(private http: HttpClient) {}

  getRecipes() {
    return this.http.get(this.recipeEndpoint);
  }

  createRecipe(recipe: any) {
    return this.http.post(this.recipeEndpoint, recipe, {
      observe: "response",
    });
  }
}
