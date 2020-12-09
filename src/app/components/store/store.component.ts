import { AuthService } from "../../services/auth.service";
import { SpinnerService } from "../../services/spinner.service";
import { Component, HostListener } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.css"],
})
export class StoreComponent {
  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private authService: AuthService
  ) {}
}
