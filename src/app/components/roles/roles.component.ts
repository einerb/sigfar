import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "app-roles",
  templateUrl: "./roles.component.html",
  styleUrls: ["./roles.component.scss"]
})
export class RolesComponent implements ICellRendererAngularComp {
  constructor() {}
  private params: any;

  agInit(params: any): void {
    this.params = params;
  }

  refresh(params: any): boolean {
    this.params = params;
    return true;
  }

  getIcon() {
    let rol, color;

    if (String(this.params.value) === "1") {
      rol = "Admin";
      color = "badge badge-success";
    } else if (String(this.params.value) === "2") {
      rol = "Empleado";
      color = "badge badge-primary";
    } else {
      rol = "Cliente";
      color = "badge badge-warning";
    }

    return {
      rol: rol,
      color: color
    };
  }
}
