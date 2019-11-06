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
import { map } from "rxjs/operators";
import { Constant } from "../shared/constants";
import { GlobalService } from "src/app/services/global.service";
var UserService = /** @class */ (function () {
    function UserService(globalService) {
        this.globalService = globalService;
    }
    UserService.prototype.getAll = function () {
        return this.globalService.get(Constant.Endpoints.USER.BASE).pipe(map(function (res) {
            return res;
        }));
    };
    UserService.prototype.getRoles = function () {
        return this.globalService.get(Constant.Endpoints.ROLES.BASE).pipe(map(function (res) {
            return res;
        }));
    };
    UserService.prototype.getById = function (id) {
        return this.globalService.get(Constant.Endpoints.USER.BASE + "/" + id).pipe(map(function (res) {
            return res;
        }));
    };
    UserService.prototype.createUser = function (data) {
        return this.globalService.post(Constant.Endpoints.USER.BASE, data).pipe(map(function (res) {
            return res;
        }));
    };
    UserService.prototype.updateUser = function (data) {
        return this.globalService
            .put(Constant.Endpoints.USER.BASE + "/" + data.id, data)
            .pipe(map(function (res) {
            return res;
        }));
    };
    UserService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [GlobalService])
    ], UserService);
    return UserService;
}());
export { UserService };
//# sourceMappingURL=user.service.js.map