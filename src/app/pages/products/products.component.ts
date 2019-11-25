import Swal from "sweetalert2";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { GridOptions } from "ag-grid-community";
import { ToastrService } from "ngx-toastr";

import { Constant } from "../../shared/constants";
import { OrderService } from "src/app/services";
import { ProductService } from "src/app/services/product.service";
import { StatusComponent } from "src/app/components/status/status.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  public form: FormGroup;
  public products = [];
  public productsInventary = [];
  public user;
  public visible = false;
  public data: any;
  public overlayLoadingTemplate;
  public gridProduct;
  public id: any;
  public showCreate = false;
  public submitted = false;

  constructor(
    private productService: ProductService,
    private toastr: ToastrService,
    private fb: FormBuilder,
    private orderService: OrderService
  ) {
    this.createForm();

    this.gridProduct = {} as GridOptions;
    const self = this;

    this.gridProduct = {
      columnDefs: [
        {
          headerName: "Nombre",
          field: "name",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Descripción",
          field: "description",
          cellRenderer: params => {
            return params.value.charAt(0).toUpperCase() + params.value.slice(1);
          }
        },
        {
          headerName: "Expedición",
          field: "date_dispatch",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Vencimiento",
          field: "expiration_date",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Estado",
          field: "status",
          cellRendererFramework: StatusComponent,
          cellStyle: { textAlign: "center" }
        }
      ],
      defaultColDef: {
        sortable: true,
        resizable: true
      },
      headerHeight: 50,
      rowHeight: 35
    };

    this.overlayLoadingTemplate =
      "<span class='ag-overlay-loading-center'>Por favor espere mientras cargan los datos</span>";

    this.gridProduct.onGridReady = () => {
      self.gridProduct.api.showLoadingOverlay();
    };
  }

  ngOnInit() {
    this.user = Constant.AUTH.getUser();

    this.allProducts();
    this.allProductInventary();
  }

  get f() {
    return this.form.controls;
  }

  public setSelected(row) {
    this.id = row.data.id;
    this.showCreate = true;
    this.data = row.data;
  }

  private allProducts() {
    this.productService.getAll().subscribe(res => {
      this.products = res.data;
    });
  }

  private allProductInventary() {
    this.productService.getAllInventary().subscribe(res => {
      this.productsInventary = res.data;

      if (this.productsInventary.length > 0) {
        this.visible = false;
      } else {
        this.visible = true;
      }
    });
  }

  private createForm() {
    this.form = this.fb.group({
      id: [""],
      quantity: [""],
      price: [""],
      product_id: [""],
      status: [""]
    });
  }

  public onSaveOrderDetails() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    console.log(this.form.value);

    const data = {
      quantity: this.form.get("quantity").value,
      price: this.form.get("price").value,
      product_id: this.form.get("product_id").value
    };

    this.orderService.createOrderDetail(data).subscribe(
      () => {
        this.onSuccess();
      },
      err => this.onFailure(err)
    );
  }

  public closeCreate() {
    this.showCreate = false;
    this.allProducts();
  }

  public create() {
    this.id = null;
    this.showCreate = !this.showCreate;
  }

  private onSuccess() {
    this.toastr.success("Producto agregado..", "", {
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
}
