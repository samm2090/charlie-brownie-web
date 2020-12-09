import { IngredientService } from "./../../services/ingredient.service";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { SpinnerService } from "../../services/spinner.service";
import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-stock-manager",
  templateUrl: "./stock-manager.component.html",
  styleUrls: ["./stock-manager.component.css"],
})
export class StockManagerComponent implements OnInit {
  constructor(
    private router: Router,
    private ingredientService: IngredientService,
    private spinner: SpinnerService
  ) {}

  ingredientForm = new FormGroup({
    name: new FormControl(),
    measureUnit: new FormControl(),
    quantity: new FormControl(),
  });

  measureUnits = this.ingredientService.getMeasureUnits();
  stock = [];

  ngOnInit(): void {
    this.listStock();
  }

  addIngredient() {
    const name = this.ingredientForm.controls.name.value;
    const measureUnit = this.ingredientForm.controls.measureUnit.value;

    const ingredient: Ingredient = {
      name,
      measureUnit,
    };
  }

  listStock() {
    this.ingredientService.getStock().subscribe((res: any) => {
      this.stock = res;
    });
  }

  updateStock(type: string, ingredient: any) {
    const quantity =
      type === "add" ? ingredient.newStock : -ingredient.newStock;

    const stock = {
      idIngredient: ingredient.id,
      quantity,
    };

    this.ingredientService.updateStock(stock).subscribe((res: any) => {
      const { insertId } = res.body;

      if (insertId) {
        // ingredient.stock = ingredient.stock + quantity;
        this.listStock();
      }
    });
  }
}
