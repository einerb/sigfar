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
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { DisciplineApi } from '../../../models/discipline.model';
var states = ['1045', '1046', '1047', '1048', '1049', '1050', '1051', '1052'];
var ModalDisciplineComponent = /** @class */ (function () {
    function ModalDisciplineComponent(newDisciplineModal) {
        var _this = this;
        this.newDisciplineModal = newDisciplineModal;
        this.hoy = new Date();
        this.noDataChange = function () { return _this.newDisciplineForm.pristine; };
        this.onSave = function () {
            _this.newDisciplineForm.ngSubmit.emit();
            if (_this.newDisciplineForm.valid) {
                console.log(_this.disciplineDataCopy);
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
            _this.newDisciplineModal.close();
        };
        this.onFailure = function (res) {
            alert('Error: No se pudo completar la operación porque ocurrió un error interno!');
            console.log(res);
        };
        this.search = function (text$) {
            return text$.pipe(debounceTime(200), distinctUntilChanged(), map(function (term) { return term.length < 2 ? []
                : states.filter(function (v) { return v.toLowerCase().indexOf(term.toLowerCase()) > -1; }).slice(0, 10); }));
        };
    }
    ModalDisciplineComponent.prototype.ngOnInit = function () {
        this.disciplineDataCopy = new DisciplineApi(this.editMode ? this.disciplineData : null);
    };
    var _a;
    __decorate([
        Input(),
        __metadata("design:type", Boolean)
    ], ModalDisciplineComponent.prototype, "editMode", void 0);
    __decorate([
        Input(),
        __metadata("design:type", typeof (_a = typeof DisciplineApi !== "undefined" && DisciplineApi) === "function" ? _a : Object)
    ], ModalDisciplineComponent.prototype, "disciplineData", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], ModalDisciplineComponent.prototype, "title", void 0);
    __decorate([
        ViewChild('newDisciplineForm', { static: false }),
        __metadata("design:type", NgForm)
    ], ModalDisciplineComponent.prototype, "newDisciplineForm", void 0);
    ModalDisciplineComponent = __decorate([
        Component({
            selector: 'app-modal-discipline',
            templateUrl: './modal-discipline.component.html',
            styleUrls: ['../styles-modal.scss'],
        }),
        __metadata("design:paramtypes", [NgbActiveModal])
    ], ModalDisciplineComponent);
    return ModalDisciplineComponent;
}());
export { ModalDisciplineComponent };
//# sourceMappingURL=modal-discipline.component.js.map