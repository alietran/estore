import { Location } from "@angular/common";
import { Component } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { authRO } from "src/app/core/models/ro/auth.ro";
import { UserService } from "src/app/core/services/user/user.service";

@Component({
  selector: "app-signin",
  templateUrl: "./signin.component.html",
  styleUrl: "./signin.component.scss",
})
export class SigninComponent {
  signinForm: FormGroup;
  errLogin = false;
  loginSuccess = false;
  userInfo: string = "";
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private location: Location
  ) {
    this.signinForm = this.fb.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]],
    });
  }

  login() {
    if (this.signinForm.valid) {
      this.userService.login(this.signinForm.value).subscribe(
        (user: authRO) => {
          this.loginSuccess = true;
          this.userInfo = user.user.firstName + " " + user.user.lastName;
          this.userService.activateToken(user);
          localStorage.setItem("token", JSON.stringify(user.token));
          localStorage.setItem("userName", JSON.stringify(this.userInfo));
          localStorage.setItem("userInfo", JSON.stringify(user.user));
          localStorage.setItem(
            "expiredTime",
            new Date(Date.now() + user.expiresInSeconds * 1000).toISOString()
          );
          setTimeout(() => {
            this.location.back();
          }, 1000);
        },
        () => {
          this.errLogin = true;
        }
      );
    } else {
      this.errLogin = true;
    }
  }
}
