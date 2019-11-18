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

import { ProductService } from "src/app/services";

@Component({
  selector: "app-product-crud",
  templateUrl: "./product-crud.component.html",
  styleUrls: ["./product-crud.component.scss"]
})
export class ProductCrudComponent implements OnInit, OnChanges {
  public form: FormGroup;
  public loading = false;
  public submitted = false;
  public visible = false;
  @Input() id: number;
  @Output() closeCreate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private productService: ProductService
  ) {
    this.createForm();
  }

  ngOnInit() {
    if (this.id) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  get f() {
    return this.form.controls;
  }

  public close() {
    this.closeCreate.emit();
  }

  public load() {
    this.productService.getById(this.id).subscribe(
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
      this.updateProduct();
    } else {
      this.visible = false;
      this.createProduct();
    }
  }

  private createForm() {
    this.form = this.fb.group({
      id: [""],
      name: ["", Validators.required],
      description: ["", [Validators.required]],
      health_registration: ["", [Validators.required]],
      date_dispatch: ["", [Validators.required]],
      expiration_date: ["", [Validators.required]],
      unity: ["", [Validators.required]],
      via_administration: ["", [Validators.required]],
      concentration: ["", [Validators.required]],
      pharmaceutical_form: ["", [Validators.required]],
      status: [""]
    });
  }

  private createProduct() {
    this.productService.createProduct(this.form.value).subscribe(
      () => {
        this.onSuccess();
        this.close();
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  private updateProduct() {
    this.productService.updateProduct(this.form.value).subscribe(
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
      text: err.message
    });
  }

  private resetForm() {
    this.form.reset();
    this.form.patchValue({
      active: true
    });
  }
}
