var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { tap } from "rxjs/operators";
import { Constant } from "src/app/shared/constants";
var InterceptRequestsService = /** @class */ (function () {
    function InterceptRequestsService(router) {
        this.router = router;
    }
    // intercept request and add headers
    InterceptRequestsService.prototype.intercept = function (request, next) {
        var _this = this;
        request = request.clone();
        if (!request.headers.get("Content-Type")) {
            request = request.clone({
                setHeaders: {
                    "Content-Type": "application/json"
                }
            });
        }
        if (!request.headers.get("Authorization")) {
            request = request.clone({
                setHeaders: { Authorization: "Bearer " + Constant.AUTH.getToken() }
            });
        }
        return next.handle(request).pipe(tap(function (event) {
            if (event instanceof HttpResponse) {
                if (!Constant.PRODUCTION && Constant.DEBUG) {
                    console.log("%cSTART HttpRequest :: Method => " + request.method + " :: URL => " + request.url + " :: ", "color: green;");
                    console.log("%cHttpResponse", "color: green;", event);
                    console.log("%cEND HttpRequest :: Method => " + request.method + " :: URL => " + request.url + " :: ", "color: green;");
                }
            }
        }, function (error) {
            if (!Constant.PRODUCTION && Constant.DEBUG) {
                console.log("%cSTART HttpRequest :: Method => " + request.method + " :: URL => " + request.url + " :: ", "color: red;");
                console.error("%cHttpResponse", "color: red;", error);
                console.log("%cEND HttpRequest :: Method => " + request.method + " :: URL => " + request.url + " :: ", "color: red;");
            }
            if (error.status === 401) {
                localStorage.setItem(Constant.AUTH.KEYS.urlBeforExpelling, _this.router.url);
                localStorage.removeItem(Constant.AUTH.KEYS.token);
                _this.router.navigateByUrl("");
            }
        }));
    };
    InterceptRequestsService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [Router])
    ], InterceptRequestsService);
    return InterceptRequestsService;
}());
export { InterceptRequestsService };
//# sourceMappingURL=intercept-requests.service.js.map