import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { Constant } from "../../shared/constants";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  public user;

  constructor(private toastr: ToastrService) {}

  ngOnInit() {
    this.user = Constant.AUTH.getUser();
  }

  public onSaveOrder() {
    console.log("Pedido creado");

    this.onSuccess();
  }

  private onSuccess() {
    this.toastr.success("Orden creada exitosamente..", "", {
      timeOut: 3000
    });
  }
}
