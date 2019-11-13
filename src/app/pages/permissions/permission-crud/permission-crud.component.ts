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

import { PermissionService, UserService } from "src/app/services";
import { Constant } from "../../../shared/constants";

@Component({
  selector: "app-permission-crud",
  templateUrl: "./permission-crud.component.html",
  styleUrls: ["./permission-crud.component.scss"]
})
export class PermissionCrudComponent implements OnInit, OnChanges {
  public form: FormGroup;
  public loading = false;
  public submitted = false;
  public users: any;
  public user;
  public visible = false;
  @Input() id: number;
  @Output() closeCreate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private permissionService: PermissionService,
    private userService: UserService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.allUsers();
    this.user = Constant.AUTH.getUser();

    if (this.id) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  get f() {
    return this.form.controls;
  }

  public acceptPermission() {
    this.permissionService.acceptPermissiom(this.form.value).subscribe(
      () => {
        this.onSuccess();
        this.close();
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  public close() {
    this.closeCreate.emit();
  }

  public load() {
    this.permissionService.getById(this.id).subscribe(
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
      this.visible = true;
      this.updatePermission();
    } else {
      this.visible = false;
      this.createPermission();
    }
  }

  private createForm() {
    this.form = this.fb.group({
      id: [""],
      type: ["", [Validators.required]],
      description: ["", [Validators.required]],
      date_start: ["", [Validators.required]],
      date_end: ["", [Validators.required]],
      user_id: ["", [Validators.required]],
      status: [""]
    });
  }

  private createPermission() {
    this.permissionService.createPermissiom(this.form.value).subscribe(
      () => {
        this.onSuccess();
        this.close();
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  private updatePermission() {
    this.permissionService.updatePermissiom(this.form.value).subscribe(
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

  private allUsers() {
    this.userService.getAll().subscribe(res => {
      this.users = res.data;
    });
  }
}
