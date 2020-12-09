import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ProductService {
  private productEndpoint = `${environment.apiHost}/product`;

  constructor(private http: HttpClient) {}

  getProducts() {
    return this.http.get(this.productEndpoint);
  }

  createProduct(recipe: any) {
    return this.http.post(this.productEndpoint, recipe, {
      observe: "response",
    });
  }
}
