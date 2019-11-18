import { Component, OnInit } from "@angular/core";
import { GridOptions } from "ag-grid-community";

import { ProductService } from "../../services";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"]
})
export class InventoryComponent implements OnInit {
  public products = [];
  public data: any;
  public overlayLoadingTemplate;
  public gridInventory;
  public id: any;
  public showCreate = false;

  constructor(private inventoryService: ProductService) {
    this.gridInventory = {} as GridOptions;
    const self = this;

    this.gridInventory = {
      columnDefs: [
        {
          headerName: "Código",
          field: "code",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Descripción",
          field: "description"
        },
        {
          headerName: "Fecha ingreso",
          field: "date_start",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Fecha salida",
          field: "date_end",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Producto",
          valueGetter: function(params) {
            return params.data.product.name;
          },
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Cantidad ingreso",
          field: "quantity_end",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Cantidad salida",
          field: "quantity_end",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Precio base",
          field: "price_start",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Precio final",
          field: "price_end",
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

    this.gridInventory.onGridReady = () => {
      self.gridInventory.api.showLoadingOverlay();
    };
  }

  ngOnInit() {
    this.allInventoryByProducts();
  }

  private allInventoryByProducts() {
    this.inventoryService.getAllByProducts().subscribe(res => {
      this.products = res.data;
    });
  }

  public closeCreate() {
    this.showCreate = false;
    this.allInventoryByProducts();
  }

  public create() {
    this.id = null;
    this.showCreate = !this.showCreate;
  }

  public setSelected(row) {
    this.id = row.data.id;
    this.showCreate = true;
    this.data = row.data;
  }
}
