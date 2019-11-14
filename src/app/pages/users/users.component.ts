import { Component, OnInit } from "@angular/core";
import { GridOptions } from "ag-grid-community";

import { RolesComponent } from "src/app/components/roles/roles.component";
import { StatusComponent } from "../../components/status/status.component";
import { UserService } from "src/app/services";
import { Constant } from "../../shared/constants";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.scss"]
})
export class UsersComponent implements OnInit {
  public users = [];
  public usersByRol = [];
  public data: any;
  public user;
  public overlayLoadingTemplate;
  public gridUser;
  public id: any;
  public showCreate = false;

  constructor(private userService: UserService) {
    this.gridUser = {} as GridOptions;
    const self = this;

    this.gridUser = {
      columnDefs: [
        {
          headerName: "Nombre",
          field: "name",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Apellidos",
          field: "lastname",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Correo electrónico",
          field: "email",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Rol",
          field: "role_id",
          cellRendererFramework: RolesComponent,
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

    this.gridUser.onGridReady = () => {
      self.gridUser.api.sizeColumnsToFit();
      self.gridUser.api.showLoadingOverlay();
    };
  }

  ngOnInit() {
    this.user = Constant.AUTH.getUser();

    this.allUsers();
    this.allUsersByRole();
  }

  private allUsers() {
    this.userService.getAll().subscribe(res => {
      this.users = res.data;
    });
  }

  private allUsersByRole() {
    this.userService.getByUser(3).subscribe(res => {
      this.usersByRol = res.data;
    });
  }

  public closeCreate() {
    this.showCreate = false;
    this.allUsers();
    this.allUsersByRole();
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
