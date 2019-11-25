import { Component, OnInit } from "@angular/core";
import { ToastrService } from "ngx-toastr";

import { Constant } from "../../shared/constants";
import { OrderService } from "src/app/services";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  public status = true;
  public orders;
  public user;

  constructor(
    private toastr: ToastrService,
    private orderService: OrderService
  ) {}

  ngOnInit() {
    this.user = Constant.AUTH.getUser();
    this.orderAll();
  }

  public createOrder() {
    const data = {
      user_id: this.user.id
    };

    this.orderService.createOrder(data).subscribe(() => {
      this.onSuccess();
      this.orderAll();
    });
  }

  private onSuccess() {
    this.toastr.success("Orden creada exitosamente..", "", {
      timeOut: 3000
    });
  }

  private orderAll() {
    this.orderService.getByUser(this.user.id).subscribe(res => {
      this.orders = res.data;

      if (this.orders.length > 0) {
        this.status = true;
      } else {
        this.status = false;
      }
    });
  }
}
