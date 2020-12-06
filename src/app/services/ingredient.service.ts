import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class IngredientService {
  private ingredientEndpoint = `${environment.apiHost}/ingredient`;

  constructor(private http: HttpClient) {}

  createIngredient(ingredient: Ingredient) {
    return this.http.post(this.ingredientEndpoint, ingredient, {
      observe: "response",
    });
  }

  getStock() {
    return this.http.get(`${this.ingredientEndpoint}/stock`);
  }

  getMeasureUnits() {
    return ["mg", "g", "kg", "ml", "l", "tz", "oz", "pizca", "un"];
  }
}
