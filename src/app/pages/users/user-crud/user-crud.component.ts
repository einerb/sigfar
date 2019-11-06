import Swal from "sweetalert2";
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { UserService } from "src/app/services";

@Component({
  selector: "app-user-crud",
  templateUrl: "./user-crud.component.html",
  styleUrls: ["./user-crud.component.scss"]
})
export class UserCrudComponent implements OnInit, OnChanges {
  public form: FormGroup;
  public loading = false;
  public submitted = false;
  public roles: any;
  @Input() id: number;
  @Output() closeCreate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private userService: UserService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.allRoles();
  }

  get f() {
    return this.form.controls;
  }

  public close() {
    this.closeCreate.emit();
  }

  public load() {
    this.userService.getById(this.id).subscribe(
      (res: any) => {
        this.myPacthValue(res.data);
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  public myPacthValue(resp) {
    this.loading = false;
    this.form.patchValue(resp);
    const role = this.roles.find(r => r.id === resp.role_id);
    this.form.get("role").setValue(role);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes["id"].currentValue) {
      this.loading = true;
      this.load();
    } else {
      this.resetForm();
    }
  }

  public onSave() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    if (this.id) {
      this.updateUser();
    } else {
      this.createUser();
    }
  }

  public allRoles() {
    this.userService.getRoles().subscribe(res => {
      this.roles = res.data;
    });
  }

  private createForm() {
    this.form = this.fb.group({
      id: [""],
      name: ["", Validators.required],
      lastname: ["", [Validators.required]],
      email: ["", [Validators.required]],
      password: ["12345"],
      role: ["", [Validators.required]],
      birthdate: ["", [Validators.required]],
      address: [""],
      phone: [""],
      status: [true, Validators.required]
    });
  }

  private createUser() {
    this.userService.createUser(this.form.value).subscribe(
      () => {
        this.onSuccess();
        this.close();
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  private updateUser() {
    this.userService.updateUser(this.form.value).subscribe(
      () => {
        this.onSuccess();
        this.close();
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  private onSuccess() {
    this.toastr.success("Operación exitosa..", "", {
      timeOut: 1000
    });
  }

  private onFailure(err) {
    Swal.fire({
      type: "error",
      title: err.code,
      text: err.error.errors
    });
  }

  private resetForm() {
    this.form.reset();
    this.form.patchValue({
      active: true
    });
  }
}
