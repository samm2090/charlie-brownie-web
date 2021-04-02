import { ProductService } from "../../services/product.service";
import { RecipeService } from "../../services/recipe.service";
import { IngredientService } from "../../services/ingredient.service";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { SpinnerService } from "../../services/spinner.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-requests",
  templateUrl: "./requests.component.html",
  styleUrls: ["./requests.component.css"],
})
export class RequestsComponent {
  constructor(
    private router: Router,
    private ingredientService: IngredientService,
    private spinner: SpinnerService,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private productService: ProductService
  ) {}
}
