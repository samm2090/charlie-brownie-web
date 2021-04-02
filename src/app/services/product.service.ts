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

  getProducts(filter?: any) {
    return this.http.get(this.productEndpoint);
  }

  createProduct(product: any) {
    return this.http.post(this.productEndpoint, product, {
      observe: "response",
    });
  }

  updateProduct(product: any) {
    return this.http.patch(this.productEndpoint, product, {
      observe: "response",
    });
  }
}
