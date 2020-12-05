import { RecipeService } from "./../../services/recipe.service";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { SpinnerService } from "../../services/spinner.service";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-create-recipe",
  templateUrl: "./create-recipe.component.html",
  styleUrls: ["./create-recipe.component.css"],
})
export class CreateRecipeComponent {
  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private spinner: SpinnerService
  ) {}

  recipeForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
  });

  ingredientForm = new FormGroup({
    name: new FormControl(),
    measureUnit: new FormControl(),
    quantity: new FormControl(),
  });

  measureUnits = ["mg", "g", "kg", "ml", "l", "tz", "oz", "pizca"];
  recipeIngredients = [];

  addIngredient() {
    const name = this.ingredientForm.controls.name.value;
    const measureUnit = this.ingredientForm.controls.measureUnit.value;

    const ingredient: Ingredient = {
      name,
      measureUnit,
    };

    this.recipeService.createIngredient(ingredient).subscribe((res: any) => {
      const { body } = res;
      ingredient.id = body.insertId;
      ingredient.quantity = this.ingredientForm.controls.quantity.value;
      this.recipeIngredients.push(ingredient);

      this.ingredientForm.reset();
    });
  }
}
