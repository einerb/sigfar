import Swal from "sweetalert2";
import {
  Component,
  OnInit,
  OnChanges,
  Input,
  EventEmitter,
  Output,
  SimpleChanges
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";

import { ProductService } from "../../../services";

@Component({
  selector: "app-inventory-crud",
  templateUrl: "./inventory-crud.component.html",
  styleUrls: ["./inventory-crud.component.scss"]
})
export class InventoryCrudComponent implements OnInit, OnChanges {
  public products = [];
  public form: FormGroup;
  public loading = false;
  public submitted = false;
  public user;
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
    this.allInventory();

    if (this.id) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  private allInventory() {
    this.productService.getAllInventary().subscribe(res => {
      this.products = res.data;

      console.log(!this.products);
    });
  }

  get f() {
    return this.form.controls;
  }

  public close() {
    this.closeCreate.emit();
  }

  public load() {
    this.productService.getByIdInventory(this.id).subscribe(
      (res: any) => {
        this.myPacthValue(res.data[0]);
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
      this.updateInventory();
    } else {
      this.visible = false;
      this.createInventory();
    }
  }

  private createForm() {
    this.form = this.fb.group({
      id: [""],
      description: ["", [Validators.required]],
      date_start: ["", [Validators.required]],
      quantity_start: ["", [Validators.required]],
      price_start: ["", [Validators.required]],
      product_id: ["", [Validators.required]]
    });
  }

  private createInventory() {
    this.productService.createInventory(this.form.value).subscribe(
      () => {
        this.onSuccess();
        this.close();
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  private updateInventory() {}

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
