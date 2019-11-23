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
import { IMyDpOptions } from "mydatepicker";

import { ProductService } from "src/app/services";
import { Constant } from "../../../shared/constants";

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
  public user;
  public startDate;
  public endDate;
  @Input() id: number;
  @Output() closeCreate: EventEmitter<any> = new EventEmitter<any>();
  public dateNow = new Date();
  public myDatePickerOptions: IMyDpOptions = {
    dateFormat: "yyyy-mm-dd",
    markCurrentDay: true,
    firstDayOfWeek: "su",
    monthLabels: {
      1: "Ene",
      2: "Feb",
      3: "Mar",
      4: "Abr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Ago",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dic"
    },
    dayLabels: {
      su: "Dom",
      mo: "Lun",
      tu: "Mar",
      we: "Mié",
      th: "Jue",
      fr: "Vie",
      sa: "Sáb"
    }
  };

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private productService: ProductService
  ) {
    this.user = Constant.AUTH.getUser();
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
      quantity_start: [""],
      price_start: [""],
      user_id: [""],
      date_start: [""],
      status: [""]
    });
  }

  private createProduct() {
    const data = {
      name: this.form.get("name").value,
      description: this.form.get("description").value,
      health_registration: this.form.get("health_registration").value,
      date_dispatch: this.form.value.date_dispatch.formatted,
      expiration_date: this.form.value.expiration_date.formatted,
      unity: this.form.get("unity").value,
      via_administration: this.form.get("via_administration").value,
      concentration: this.form.get("concentration").value,
      pharmaceutical_form: this.form.get("pharmaceutical_form").value,
      quantity_start: this.form.get("quantity_start").value,
      price_start: this.form.get("price_start").value,
      user_id: this.user.id,
      date_start: "2019-10-11"
    };
    this.productService.createProduct(data).subscribe(
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
