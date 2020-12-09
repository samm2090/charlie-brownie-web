import { ProductService } from "./../../services/product.service";
import { RecipeService } from "../../services/recipe.service";
import { IngredientService } from "../../services/ingredient.service";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { SpinnerService } from "../../services/spinner.service";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.css"],
})
export class ProductsComponent implements OnInit {
  constructor(
    private router: Router,
    private ingredientService: IngredientService,
    private spinner: SpinnerService,
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService,
    private productService: ProductService
  ) {}

  products = [];

  recipes = [];

  productForm = new FormGroup({
    name: new FormControl(),
    description: new FormControl(),
    price: new FormControl(),
  });

  ngOnInit(): void {
    this.listProducts();
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

  listProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res;
    });
  }
}
