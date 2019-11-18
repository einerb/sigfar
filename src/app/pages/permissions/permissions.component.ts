import { Component, OnInit } from "@angular/core";
import { GridOptions } from "ag-grid-community";

import { StatusComponent } from "src/app/components/status/status.component";
import { PermissionService } from "../../services/permission.service";
import { Constant } from "../../shared/constants";

@Component({
  selector: "app-permissions",
  templateUrl: "./permissions.component.html",
  styleUrls: ["./permissions.component.scss"]
})
export class PermissionsComponent implements OnInit {
  public permissions = [];
  public permissionByUser = [];
  public user;
  public user_resp;
  public data: any;
  public overlayLoadingTemplate;
  public gridPermission;
  public id: any;
  public showCreate = false;

  constructor(private permissionService: PermissionService) {
    this.gridPermission = {} as GridOptions;
    const self = this;

    this.gridPermission = {
      columnDefs: [
        {
          headerName: "Tipo",
          field: "type"
        },
        {
          headerName: "Descripción",
          field: "description"
        },
        {
          headerName: "Usuario",
          valueGetter: function(params) {
            return (
              params.data.user[0].name + " " + params.data.user[0].lastname
            );
          },
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Fecha inicio",
          field: "date_start",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Fecha final",
          field: "date_end",
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

    this.gridPermission.onGridReady = () => {
      self.gridPermission.api.showLoadingOverlay();
    };
  }

  ngOnInit() {
    this.user = Constant.AUTH.getUser();

    this.allPermissions();
    this.allPermissionByUser();
  }

  private allPermissions() {
    this.permissionService.getAll().subscribe(res => {
      this.permissions = res.data;
    });
  }

  private allPermissionByUser() {
    this.permissionService.getByUser(this.user.id).subscribe(res => {
      this.permissionByUser = res.data;
    });
  }

  public closeCreate() {
    this.showCreate = false;
    this.allPermissions();
    this.allPermissionByUser();
  }

  public create() {
    this.id = null;
    this.showCreate = !this.showCreate;
  }

  public setSelected(row) {
    this.id = row.data.id;
    this.user_resp = row.data.user_id;
    this.showCreate = true;
    this.data = row.data;
  }
}
