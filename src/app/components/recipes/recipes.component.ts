import { RecipeService } from "./../../services/recipe.service";
import { IngredientService } from "./../../services/ingredient.service";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { SpinnerService } from "../../services/spinner.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-recipes",
  templateUrl: "./recipes.component.html",
  styleUrls: ["./recipes.component.css"],
})
export class RecipesComponent implements OnInit {
  constructor(
    private router: Router,
    private ingredientService: IngredientService,
    private spinner: SpinnerService,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  recipes = [];

  ngOnInit(): void {
    this.listRecipes();
  }

  addRecipe() {
    this.router.navigate(["admin/create-recipe"]);
  }

  listRecipes() {
    this.recipeService.getRecipes().subscribe((res: any) => {
      this.recipes = res;
    });
  }
}
