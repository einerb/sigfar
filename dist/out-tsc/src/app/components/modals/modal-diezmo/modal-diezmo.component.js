var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { DiezmoApi } from 'src/app/models/diezmo.model';
var ModalDiezmoComponent = /** @class */ (function () {
    function ModalDiezmoComponent(newDiezmoModal) {
        var _this = this;
        this.newDiezmoModal = newDiezmoModal;
        this.hoy = new Date();
        this.onSave = function () {
            _this.newDiezmoForm.ngSubmit.emit();
            if (_this.newDiezmoForm.valid) {
                console.log(_this.diezmoDataCopy);
                if (_this.editMode) {
                    // this.userService.updateUser(this.userDataCopy).then(this.onSuccess, this.onFailure);
                }
                else {
                    // this.userService.createUser(this.userDataCopy).then(this.onSuccess, this.onFailure);
                }
            }
            else {
                // TODO: Display Error in some way here
            }
        };
        this.onSuccess = function () {
            _this.newDiezmoModal.close();
        };
        this.onFailure = function (res) {
            alert('Error: No se pudo completar la operación porque ocurrió un error interno!');
            console.log(res);
        };
    }
    ModalDiezmoComponent.prototype.ngOnInit = function () {
        this.diezmoDataCopy = new DiezmoApi(this.editMode ? this.diezmoData : null);
    };
    var _a;
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ModalDiezmoComponent.prototype, "editMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_a = typeof DiezmoApi !== "undefined" && DiezmoApi) === "function" ? _a : Object)
    ], ModalDiezmoComponent.prototype, "diezmoData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalDiezmoComponent.prototype, "title", void 0);
    __decorate([
        ViewChild('newDiezmoForm', { static: false }),
        __metadata("design:type", NgForm)
    ], ModalDiezmoComponent.prototype, "newDiezmoForm", void 0);
    ModalDiezmoComponent = __decorate([
        Component({
            selector: 'app-modal-diezmo',
            templateUrl: './modal-diezmo.component.html',
            styleUrls: ['../styles-modal.scss']
        }),
        __metadata("design:paramtypes", [NgbActiveModal])
    ], ModalDiezmoComponent);
    return ModalDiezmoComponent;
}());
export { ModalDiezmoComponent };
//# sourceMappingURL=modal-diezmo.component.js.map