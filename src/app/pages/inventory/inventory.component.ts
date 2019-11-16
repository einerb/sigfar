import { Component, OnInit } from "@angular/core";
import { GridOptions } from "ag-grid-community";

import { ProductService } from "../../services";
import { StatusComponent } from "../../components/status/status.component";

@Component({
  selector: "app-inventory",
  templateUrl: "./inventory.component.html",
  styleUrls: ["./inventory.component.scss"]
})
export class InventoryComponent implements OnInit {
  public inventories = [];
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
          headerName: "Fecha inicial",
          field: "date_start",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Fecha final",
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
          headerName: "Cantidad",
          field: "quantity_end",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Precio",
          field: "price_end",
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

    this.gridInventory.onGridReady = () => {
      self.gridInventory.api.showLoadingOverlay();
    };
  }

  ngOnInit() {
    this.allInventories();
  }

  private allInventories() {
    this.inventoryService.getAllInventary().subscribe(res => {
      this.inventories = res.data;
    });
  }

  public closeCreate() {
    this.showCreate = false;
    this.allInventories();
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
