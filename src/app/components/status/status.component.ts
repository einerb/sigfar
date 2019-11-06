import { Component, OnInit } from "@angular/core";
import { ICellRendererAngularComp } from "ag-grid-angular";

@Component({
  selector: "app-roles",
  templateUrl: "./status.component.html",
  styleUrls: ["./status.component.scss"]
})
export class StatusComponent implements ICellRendererAngularComp {
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
    let color;

    if (
      String(this.params.value) === "true" ||
      String(this.params.value) === "1"
    ) {
      color = "m-btn-success";
    } else {
      color = "m-btn-danger";
    }

    return {
      color: color
    };
  }
}
