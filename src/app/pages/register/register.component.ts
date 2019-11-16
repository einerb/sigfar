import Swal from "sweetalert2";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { Router } from "@angular/router";

import { UserService } from "src/app/services";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  hoy = new Date();
  public submitted = false;
  public loading = false;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private toastr: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    const rol = 3;
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required],
      role_id: [rol],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  public onRegister() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.loading = true;
    this.userService.registerUser(this.form.value).subscribe(
      () => {
        this.onSuccess();
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  private onSuccess() {
    this.toastr.success(
      "Registro exitoso... Serás redirigido para que inicies sesión en el sistema!",
      "",
      {
        timeOut: 3000
      }
    );

    setTimeout(() => {
      this.router.navigate(["/login"]);
    }, 3000);
  }

  private onFailure(err) {
    Swal.fire({
      type: "error",
      title: err.code,
      text: err.error.errors
    });
  }
}
