import { IngredientService } from "../../services/ingredient.service";
import { FormControl } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { SpinnerService } from "../../services/spinner.service";
import { ChangeDetectorRef, Component, OnDestroy } from "@angular/core";
import { Router } from "@angular/router";
import { MediaMatcher } from "@angular/cdk/layout";

@Component({
  selector: "app-admin",
  templateUrl: "./admin.component.html",
  styleUrls: ["./admin.component.css"],
})
export class AdminComponent implements OnDestroy {
  mobileQuery: MediaQueryList;
  private mobileQueryListener: () => void;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private router: Router
  ) {
    this.mobileQuery = media.matchMedia("(max-width: 800px)");
    this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addEventListener("change", this.mobileQueryListener);
  }

  menuOptions = [
    {
      route: "recipes",
      name: "Recetas",
    },
    {
      route: "stock-manager",
      name: "Stock",
    },
    {
      route: "products",
      name: "Productos",
    },
    {
      route: "stock-manager",
      name: "Pedidos",
    },
  ];

  logout() {
    this.router.navigate(["login"]);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeEventListener("change", this.mobileQueryListener);
  }
}
