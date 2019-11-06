var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
var RoleGuard = /** @class */ (function () {
    function RoleGuard(_router) {
        this._router = _router;
    }
    RoleGuard.prototype.canActivate = function (next, state) {
        var user = JSON.parse(localStorage.getItem("user"));
        if (user.userType_id === next.data.userType_id) {
            return true;
        }
        /* const  userType: any = Constant.USERTYPES.find (res => res.value === user.userType_id); */
        /* this._router.navigate(['/home/'+ userType.url]); */
        return false;
    };
    RoleGuard = __decorate([
        Injectable({
            providedIn: "root"
        }),
        Injectable(),
        __metadata("design:paramtypes", [Router])
    ], RoleGuard);
    return RoleGuard;
}());
export { RoleGuard };
//# sourceMappingURL=role-guard.js.map