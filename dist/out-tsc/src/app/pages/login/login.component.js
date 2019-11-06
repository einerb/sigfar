var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import Swal from "sweetalert2";
import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthenticationService } from "../../services/authentication.service";
import { first, delay } from "rxjs/operators";
var LoginComponent = /** @class */ (function () {
    function LoginComponent(formBuilder, authenticationService, router) {
        this.formBuilder = formBuilder;
        this.authenticationService = authenticationService;
        this.router = router;
        this.loading = false;
        this.passMinLegth = 5;
        this.submitted = false;
        this.hoy = new Date();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onLoginEmailPassword = function () {
        var _this = this;
        localStorage.removeItem("user");
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        this.loading = true;
        this.authenticationService
            .login(this.form.value)
            .pipe(first())
            .pipe(delay(1000))
            .subscribe(function () {
            _this.user = JSON.parse(localStorage.getItem("user"));
            _this.onSuccess();
        }, function (err) {
            _this.onFailure(err);
        });
    };
    LoginComponent.prototype.onSuccess = function () {
        this.router.navigateByUrl("/dashboard");
    };
    LoginComponent.prototype.onFailure = function (err) {
        this.loading = false;
        Swal.fire({
            type: "error",
            title: "Error de sesión",
            text: "El usuario o la contraseña son incorrectas!"
        });
    };
    LoginComponent = __decorate([
        Component({
            selector: "app-login",
            templateUrl: "./login.component.html",
            styleUrls: ["./login.component.scss"]
        }),
        __metadata("design:paramtypes", [FormBuilder,
            AuthenticationService,
            Router])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map