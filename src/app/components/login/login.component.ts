import { SpinnerService } from "./../../services/spinner.service";
import { Component, HostListener } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";
import { HttpResponse } from "@angular/common/http";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  constructor(private router: Router, private spinner: SpinnerService) {}

  @HostListener("window:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.login();
    }
  }

  login() {
    this.spinner.start();
    const user = this.userForm.controls.email.value;
    const password = this.userForm.controls.password.value;
  }
}
