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
import { MemberApi } from 'src/app/models/member.model';
var ModalAdultComponent = /** @class */ (function () {
    function ModalAdultComponent(newAdultModal) {
        var _this = this;
        this.newAdultModal = newAdultModal;
        this.hoy = new Date();
        this.onSave = function () {
            _this.newAdultForm.ngSubmit.emit();
            if (_this.newAdultForm.valid) {
                console.log(_this.adultDataCopy);
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
            _this.newAdultModal.close();
        };
        this.onFailure = function (res) {
            alert('Error: No se pudo completar la operación porque ocurrió un error interno!');
            console.log(res);
        };
    }
    ModalAdultComponent.prototype.ngOnInit = function () {
        this.adultDataCopy = new MemberApi(this.editMode ? this.adultData : null);
    };
    __decorate([
        ViewChild('newAdultForm', { static: false }),
        __metadata("design:type", NgForm)
    ], ModalAdultComponent.prototype, "newAdultForm", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ModalAdultComponent.prototype, "editMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", MemberApi)
    ], ModalAdultComponent.prototype, "adultData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalAdultComponent.prototype, "title", void 0);
    ModalAdultComponent = __decorate([
        Component({
            selector: 'app-modal-adult',
            templateUrl: './modal-adult.component.html',
            styleUrls: ['../styles-modal.scss']
        }),
        __metadata("design:paramtypes", [NgbActiveModal])
    ], ModalAdultComponent);
    return ModalAdultComponent;
}());
export { ModalAdultComponent };
//# sourceMappingURL=modal-adult.component.js.map