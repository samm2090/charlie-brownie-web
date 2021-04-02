import { ProductService } from "./../../services/product.service";
import { AuthService } from "../../services/auth.service";
import { SpinnerService } from "../../services/spinner.service";
import { Component, HostListener, OnInit } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent implements OnInit {
  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private authService: AuthService,
    private productService: ProductService
  ) {}

  products = [];

  ngOnInit(): void {
    this.listProducts();  
  }

  listProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.products = res;
    });
  }
}
