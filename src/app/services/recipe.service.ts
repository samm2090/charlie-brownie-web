import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class RecipeService {
  private ingredientEndpoint = `${environment.apiHost}/ingredient`;
  private recipeEndpoint = `${environment.apiHost}/recipe`;

  constructor(private http: HttpClient) {}

  createIngredient(ingredient: Ingredient) {
    return this.http.post(this.ingredientEndpoint, ingredient, {
      observe: "response",
    });
  }
}
