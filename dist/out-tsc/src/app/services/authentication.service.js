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
import { GlobalService } from "../services/global.service";
import { map } from "rxjs/operators";
import { Constant } from "../shared/constants";
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(globalService) {
        this.globalService = globalService;
    }
    /**
     * @description realizar login
     * @returns Observable <any>
     */
    AuthenticationService.prototype.login = function (data) {
        return this.globalService
            .post(Constant.Endpoints.AUTH.LOGIN, {
            grant_type: "password",
            email: data.email,
            password: data.password,
            remember_me: true
        })
            .pipe(map(function (res) {
            localStorage.setItem("token", res["access_token"]);
            localStorage.setItem("user", JSON.stringify(res["user"]));
            return res;
        }));
    };
    AuthenticationService.prototype.isLoggedIn = function () {
        if (localStorage.getItem("token") && localStorage.getItem("user")) {
            return true;
        }
        return false;
    };
    /*   verifyToken() {
      return this.globalService.get(Constant.Endpoints.AUTH.VERIFY_TOKEN);
    } */
    /**
     * logout
     */
    AuthenticationService.prototype.logout = function () {
        return this.globalService.get(Constant.Endpoints.AUTH.LOGOUT).pipe(map(function (res) {
            localStorage.removeItem("token");
            localStorage.removeItem("user");
            return res;
        }));
    };
    AuthenticationService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [GlobalService])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map