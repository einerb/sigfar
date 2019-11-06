var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild, Input } from "@angular/core";
import { NgForm } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
var ModalUserComponent = /** @class */ (function () {
    function ModalUserComponent(newUserModal) {
        var _this = this;
        this.newUserModal = newUserModal;
        this.hoy = new Date();
        this.onSave = function () {
            _this.newUserForm.ngSubmit.emit();
            if (_this.newUserForm.valid) {
                console.log(_this.userDataCopy);
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
            _this.newUserModal.close();
        };
        this.onFailure = function (res) {
            alert("Error: No se pudo completar la operación porque ocurrió un error interno!");
            console.log(res);
        };
    }
    ModalUserComponent.prototype.ngOnInit = function () { };
    __decorate([
        ViewChild("newUserForm", { static: false }),
        __metadata("design:type", NgForm)
    ], ModalUserComponent.prototype, "newUserForm", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ModalUserComponent.prototype, "editMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", Object)
    ], ModalUserComponent.prototype, "userData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalUserComponent.prototype, "title", void 0);
    ModalUserComponent = __decorate([
        Component({
            selector: "app-modal-user",
            templateUrl: "./modal-user.component.html",
            styleUrls: ["../styles-modal.scss"]
        }),
        __metadata("design:paramtypes", [NgbActiveModal])
    ], ModalUserComponent);
    return ModalUserComponent;
}());
export { ModalUserComponent };
//# sourceMappingURL=modal-user.component.js.map