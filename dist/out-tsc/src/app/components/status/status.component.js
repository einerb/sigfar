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
var StatusComponent = /** @class */ (function () {
    function StatusComponent() {
    }
    StatusComponent.prototype.agInit = function (params) {
        this.params = params;
        console.log(params);
        console.log(this.params);
    };
    StatusComponent.prototype.refresh = function (params) {
        this.params = params;
        return true;
    };
    StatusComponent.prototype.getIcon = function () {
        var color;
        if (String(this.params.value) === "true" ||
            String(this.params.value) === "1") {
            color = "m-btn-success";
        }
        else {
            color = "m-btn-danger";
        }
        return {
            color: color
        };
    };
    StatusComponent = __decorate([
        Component({
            selector: "app-roles",
            templateUrl: "./status.component.html",
            styleUrls: ["./status.component.scss"]
        }),
        __metadata("design:paramtypes", [])
    ], StatusComponent);
    return StatusComponent;
}());
export { StatusComponent };
//# sourceMappingURL=status.component.js.map