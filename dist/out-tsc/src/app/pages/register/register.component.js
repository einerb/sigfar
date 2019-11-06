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
import { FormBuilder, Validators } from "@angular/forms";
var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(formBuilder) {
        this.formBuilder = formBuilder;
        this.hoy = new Date();
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.form = this.formBuilder.group({
            name: ["", Validators.required],
            lastname: ["", Validators.required],
            address: ["", Validators.required],
            phone: ["", Validators.required],
            email: ["", Validators.required],
            password: ["", Validators.required]
        });
    };
    Object.defineProperty(RegisterComponent.prototype, "f", {
        get: function () {
            return this.form.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterComponent.prototype.onRegister = function () { };
    RegisterComponent.prototype.onSuccess = function () { };
    RegisterComponent.prototype.privateonfailure = function () { };
    RegisterComponent = __decorate([
        Component({
            selector: "app-register",
            templateUrl: "./register.component.html",
            styleUrls: ["./register.component.scss"]
        }),
        __metadata("design:paramtypes", [FormBuilder])
    ], RegisterComponent);
    return RegisterComponent;
}());
export { RegisterComponent };
//# sourceMappingURL=register.component.js.map