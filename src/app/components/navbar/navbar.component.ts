import { Component, OnInit } from "@angular/core";
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";

import { AuthenticationService } from "src/app/services";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  providers: [NgbDropdownConfig]
})
export class NavbarComponent implements OnInit {
  public sidebarOpened = false;
  public user: any;
  public visible = true;
  public exist = false;

  toggleOffcanvas() {
    this.sidebarOpened = !this.sidebarOpened;
    if (this.sidebarOpened) {
      document.querySelector(".sidebar-offcanvas").classList.add("active");
    } else {
      document.querySelector(".sidebar-offcanvas").classList.remove("active");
    }
  }

  constructor(
    config: NgbDropdownConfig,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthenticationService
  ) {
    config.placement = "bottom-right";
  }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("user"));
  }

  public logout() {
    this.authService.logout().subscribe(res => {
      this.toastr.info("Cerrando sesión..", "", {
        timeOut: 1000
      });
    });
    setTimeout(() => {
      this.router.navigate(["/login"]);
    }, 1200);
  }
}
