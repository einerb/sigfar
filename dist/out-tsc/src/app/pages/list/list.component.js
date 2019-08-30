var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
var ListComponent = /** @class */ (function () {
    function ListComponent(router) {
        this.router = router;
    }
    ListComponent.prototype.ngOnInit = function () {
        this.loadByRoute();
    };
    ListComponent.prototype.loadByRoute = function () {
        this.urlBase = this.router.snapshot.url.join().split(',')[1];
        switch (this.urlBase) {
            case 'children-of-god':
                this.childrenofgod = true;
                break;
            case 'berakhah':
                this.berakhah = true;
                break;
            default:
                console.log('hola mundo');
        }
    };
    ListComponent = __decorate([
        Component({
            selector: 'app-list',
            templateUrl: './list.component.html',
            styleUrls: ['./list.component.scss']
        }),
        __metadata("design:paramtypes", [ActivatedRoute])
    ], ListComponent);
    return ListComponent;
}());
export { ListComponent };
//# sourceMappingURL=list.component.js.map