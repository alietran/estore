import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { UserService } from "src/app/core/services/user/user.service";
import { matchPasswords } from "src/app/helper/validatePass.helper";

@Component({
  selector: "app-signup",

  templateUrl: "./signup.component.html",
  styleUrl: "./signup.component.scss",
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;
  alertMessage: string = "";
  alertType: number = 0; //0 : success,; 1: warning, 2: error;

  constructor(private fb: FormBuilder, private userService: UserService) {}

  ngOnInit(): void {
    this.signUpForm = this.fb.group(
      {
        email: ["", [Validators.required, Validators.email]],
        firstName: ["", Validators.required],
        lastName: [""],
        state: [""],
        city: [""],
        pin: [""],
        password: ["", Validators.required],
        address: [""],
        confirmPassword: ["", Validators.required],
      },
      {
        validator: matchPasswords,
      }
    );
  }

  get firstName() {
    return this.signUpForm.get("firstName");
  }

  get email() {
    return this.signUpForm.get("email");
  }

  get password() {
    return this.signUpForm.get("password");
  }

  get confirmPassword() {
    return this.signUpForm.get("confirmPassword");
  }

  onSubmit() {
    if (this.signUpForm.valid) {
      this.userService.createUser(this.signUpForm.value).subscribe({
        next: (result) => {
          if (result.message === "success") {
            this.alertMessage = "User created successfully";
            this.alertType = 0;
          } else if (result.message === "Email already exists") {
            this.alertMessage = result.message;
            this.alertType = 1;
          }
        },
        error: (error) => {
          this.alertMessage = error.message;
          this.alertType = 2;
        },
      });
    }
  }
}
