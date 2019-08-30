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
var ModalChildComponent = /** @class */ (function () {
    function ModalChildComponent(newChildModal) {
        var _this = this;
        this.newChildModal = newChildModal;
        this.hoy = new Date();
        this.onSave = function () {
            _this.newChildForm.ngSubmit.emit();
            if (_this.newChildForm.valid) {
                console.log(_this.childDataCopy);
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
            _this.newChildModal.close();
        };
        this.onFailure = function (res) {
            alert('Error: No se pudo completar la operación porque ocurrió un error interno!');
            console.log(res);
        };
    }
    ModalChildComponent.prototype.ngOnInit = function () {
        this.childDataCopy = new MemberApi(this.editMode ? this.childData : null);
    };
    __decorate([
        ViewChild('newChildForm', { static: false }),
        __metadata("design:type", NgForm)
    ], ModalChildComponent.prototype, "newChildForm", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ModalChildComponent.prototype, "editMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", MemberApi)
    ], ModalChildComponent.prototype, "childData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalChildComponent.prototype, "title", void 0);
    ModalChildComponent = __decorate([
        Component({
            selector: 'app-modal-child',
            templateUrl: './modal-child.component.html',
            styleUrls: ['../styles-modal.scss']
        }),
        __metadata("design:paramtypes", [NgbActiveModal])
    ], ModalChildComponent);
    return ModalChildComponent;
}());
export { ModalChildComponent };
//# sourceMappingURL=modal-child.component.js.map