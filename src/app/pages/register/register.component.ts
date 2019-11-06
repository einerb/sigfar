import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  public form: FormGroup;
  hoy = new Date();

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: ["", Validators.required],
      lastname: ["", Validators.required],
      address: ["", Validators.required],
      phone: ["", Validators.required],
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  get f() {
    return this.form.controls;
  }

  public onRegister() {}

  private onSuccess() {}

  privateonfailure() {}
}
