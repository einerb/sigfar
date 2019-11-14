import { Component, OnInit } from "@angular/core";
import { GridOptions } from "ag-grid-community";

import { Constant } from "../../shared/constants";
import { ProductService } from "src/app/services/product.service";
import { StatusComponent } from "src/app/components/status/status.component";

@Component({
  selector: "app-products",
  templateUrl: "./products.component.html",
  styleUrls: ["./products.component.scss"]
})
export class ProductsComponent implements OnInit {
  public products = [];
  public productsInventary = [];
  public user;
  public visible = false;
  public data: any;
  public overlayLoadingTemplate;
  public gridProduct;
  public id: any;
  public showCreate = false;

  constructor(private productService: ProductService) {
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
          field: "description"
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
      self.gridProduct.api.sizeColumnsToFit();
      self.gridProduct.api.showLoadingOverlay();
    };
  }

  ngOnInit() {
    this.user = Constant.AUTH.getUser();

    this.allProducts();
    this.allProductInventary();
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

  public closeCreate() {
    this.showCreate = false;
    this.allProducts();
  }

  public create() {
    this.id = null;
    this.showCreate = !this.showCreate;
  }
}
