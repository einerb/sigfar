var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { HttpHeaders, HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Constant } from "../shared/constants";
var GlobalService = /** @class */ (function () {
    function GlobalService(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                Authorization: ""
            })
        };
    }
    /**
     * @description Manejo de errores en las peticiones.
     */
    GlobalService.prototype.handleError = function (error) {
        var stylesLogErrors = "\n      background: linear-gradient(#a30b34, #571402);\n      border: 1px solid #3E0E02;\n      color: white;\n      display: block;\n      text-shadow: 0 1px 0 rgba(0, 0, 0, 0.3);\n      box-shadow:\n        0 1px 0 rgba(255, 255, 255, 0.4) inset,\n        0 5px 3px -5px rgba(0, 0, 0, 0.5),\n        0 -13px 5px -10px rgba(255, 255, 255, 0.4) inset;\n      text-align: center;\n      font-weight: bold;\n    ";
        if (!Constant.PRODUCTION) {
            // console.log(`%c handleError %c ${window['emoticons'].bomb}`, stylesLogErrors, 'padding-left: 10px; font-size: 20px;');
            console.log(error);
            // console.log('%c End HandleError', stylesLogErrors);
        }
        return throwError({
            code: error.statusText,
            message: error.error.message ? error.error.message : error.error.message,
            handleError: true,
            error: error.error
        });
    };
    /**
     * @description Optener token de autententication
     * @returns String
     */
    GlobalService.prototype.getToken = function () {
        return Constant.AUTH.getToken();
    };
    /**
     * @description Optener cabecera por defecto
     * @return HttpHeaders {any}
     */
    GlobalService.prototype.getHeader = function () {
        var token = "Bearer " + this.getToken();
        this.httpOptions.headers.Authorization = token;
        return this.httpOptions;
    };
    /**
     * @description Peticiones por el metodo post
     * @param url string
     * @param data Object
     * @param header? HttpHeaders
     * @return Observable
     */
    GlobalService.prototype.post = function (url, data, headerOptions) {
        return this.http
            .post(url, data, headerOptions ? headerOptions : this.getHeader())
            .pipe(catchError(this.handleError));
    };
    /**
     * @description Peticiones por el metodo GET
     * @param url string
     * @param header? HttpHeaders
     * @return Observable
     */
    GlobalService.prototype.get = function (url, headerOptions) {
        return this.http
            .get(url, headerOptions ? headerOptions : this.getHeader())
            .pipe(catchError(this.handleError));
    };
    /**
     * @description Peticiones por el metodo PUT
     * @param url string
     * @param header? HttpHeaders
     * @return Observable
     */
    GlobalService.prototype.put = function (url, data, headerOptions) {
        return this.http
            .put(url, data, headerOptions ? headerOptions : this.getHeader())
            .pipe(catchError(this.handleError));
    };
    /**
     * @description Peticiones por el metodo DEL
     * @param url string
     * @param header? HttpHeaders
     * @return Observable
     */
    GlobalService.prototype.delete = function (url, headerOptions) {
        return this.http
            .delete(url, headerOptions ? headerOptions : this.getHeader())
            .pipe(catchError(this.handleError));
    };
    GlobalService = __decorate([
        Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [HttpClient])
    ], GlobalService);
    return GlobalService;
}());
export { GlobalService };
//# sourceMappingURL=global.service.js.map