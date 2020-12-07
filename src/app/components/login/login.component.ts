import { AuthService } from "./../../services/auth.service";
import { SpinnerService } from "./../../services/spinner.service";
import { Component, HostListener } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent {
  constructor(
    private router: Router,
    private spinner: SpinnerService,
    private authService: AuthService
  ) {}

  userForm = new FormGroup({
    email: new FormControl(),
    password: new FormControl(),
  });

  @HostListener("window:keyup", ["$event"])
  keyEvent(event: KeyboardEvent) {
    if (event.key === "Enter") {
      this.login();
    }
  }

  login() {
    const username = this.userForm.controls.email.value;
    const password = this.userForm.controls.password.value;

    this.spinner.start();

    this.authService.login(username, password).subscribe((res: any) => {
      this.spinner.stop();

      if (res.body) {
        this.router.navigate(["create-recipe"]);
      }
    });
  }
}
