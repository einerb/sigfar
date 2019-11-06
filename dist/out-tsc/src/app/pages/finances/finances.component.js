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
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
var FinancesComponent = /** @class */ (function () {
    function FinancesComponent(modalService) {
        this.modalService = modalService;
    }
    FinancesComponent.prototype.ngOnInit = function () {
    };
    FinancesComponent.prototype.addDiezmo = function () {
        this.editingMode = false;
        this.openNewDisciplineModal();
    };
    FinancesComponent.prototype.openNewDisciplineModal = function () {
        var modalRef = this.modalService.open('', { backdrop: 'static', keyboard: false });
        modalRef.componentInstance.editMode = this.editingMode;
        modalRef.componentInstance.title = this.editingMode ? 'Editar diezmo/diezmador' : 'Crear diezmo/diezmador';
    };
    FinancesComponent = __decorate([
        Component({
            selector: 'app-finances',
            templateUrl: './finances.component.html',
            styleUrls: ['./finances.component.scss']
        }),
        __metadata("design:paramtypes", [NgbModal])
    ], FinancesComponent);
    return FinancesComponent;
}());
export { FinancesComponent };
//# sourceMappingURL=finances.component.js.map