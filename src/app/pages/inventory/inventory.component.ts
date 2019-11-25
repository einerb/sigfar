import { Component, OnInit } from "@angular/core";
import { GridOptions } from "ag-grid-community";

import { ProductService } from "../../services";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"]
})
export class InventoryComponent implements OnInit {
  public inventories = [];
  public overlayLoadingTemplate;
  public gridInventory;

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
          valueGetter: function(params) {
            return params.data.product.description;
          },
          cellRenderer: params => {
            return params.value.charAt(0).toUpperCase() + params.value.slice(1);
          }
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
          cellRenderer: params => {
            return params.value.charAt(0).toUpperCase() + params.value.slice(1);
          },
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Cantidad ingreso",
          field: "quantity_start",
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
        },
        {
          headerName: "Existencia",
          field: "stock",
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
    this.inventoryService.getAllInventary().subscribe(res => {
      this.inventories = res.data;
    });
  }
}
