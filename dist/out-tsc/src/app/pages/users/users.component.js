var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from "@angular/core";
import { UserService } from "src/app/services";
import { StatusComponent } from "../../components/status/status.component";
var UsersComponent = /** @class */ (function () {
    function UsersComponent(userService) {
        this.userService = userService;
        this.users = [];
        this.showCreate = false;
        this.gridUser = {};
        var self = this;
        this.gridUser = {
            columnDefs: [
                {
                    headerName: "Nombre",
                    field: "name"
                },
                {
                    headerName: "Apellidos",
                    field: "lastname"
                },
                {
                    headerName: "Correo electrónico",
                    field: "email",
                    cellStyle: { textAlign: "center" }
                },
                {
                    headerName: "Rol",
                    field: "role_id",
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
        this.gridUser.onGridReady = function () {
            self.gridUser.api.sizeColumnsToFit();
            self.gridUser.api.showLoadingOverlay();
        };
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.allUsers();
    };
    UsersComponent.prototype.allUsers = function () {
        var _this = this;
        this.userService.getAll().subscribe(function (res) {
            _this.users = res.data;
        });
    };
    UsersComponent.prototype.closeCreate = function () {
        this.showCreate = false;
        this.allUsers();
    };
    UsersComponent.prototype.create = function () {
        this.id = null;
        this.showCreate = !this.showCreate;
    };
    UsersComponent.prototype.setSelected = function (row) {
        this.id = row.data.id;
        this.showCreate = true;
        this.data = row.data;
    };
    UsersComponent = __decorate([
        Component({
            selector: "app-users",
            templateUrl: "./users.component.html",
            styleUrls: ["./users.component.scss"]
        }),
        __metadata("design:paramtypes", [UserService])
    ], UsersComponent);
    return UsersComponent;
}());
export { UsersComponent };
//# sourceMappingURL=users.component.js.map