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
import { NgbDropdownConfig } from "@ng-bootstrap/ng-bootstrap";
import { Router } from "@angular/router";
import { ToastrService } from "ngx-toastr";
import { AuthenticationService } from "src/app/services";
var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(config, router, toastr, authService) {
        this.router = router;
        this.toastr = toastr;
        this.authService = authService;
        this.sidebarOpened = false;
        this.visible = true;
        config.placement = "bottom-right";
    }
    NavbarComponent.prototype.toggleOffcanvas = function () {
        this.sidebarOpened = !this.sidebarOpened;
        if (this.sidebarOpened) {
            document.querySelector(".sidebar-offcanvas").classList.add("active");
        }
        else {
            document.querySelector(".sidebar-offcanvas").classList.remove("active");
        }
    };
    NavbarComponent.prototype.ngOnInit = function () {
        this.user = JSON.parse(localStorage.getItem("user"));
    };
    NavbarComponent.prototype.logout = function () {
        var _this = this;
        this.authService.logout().subscribe(function (res) {
            _this.toastr.info("Cerrando sesión..", "", {
                timeOut: 1000
            });
        });
        setTimeout(function () {
            _this.router.navigate(["/login"]);
        }, 1200);
    };
    NavbarComponent = __decorate([
        Component({
            selector: "app-navbar",
            templateUrl: "./navbar.component.html",
            styleUrls: ["./navbar.component.scss"],
            providers: [NgbDropdownConfig]
        }),
        __metadata("design:paramtypes", [NgbDropdownConfig,
            Router,
            ToastrService,
            AuthenticationService])
    ], NavbarComponent);
    return NavbarComponent;
}());
export { NavbarComponent };
//# sourceMappingURL=navbar.component.js.map