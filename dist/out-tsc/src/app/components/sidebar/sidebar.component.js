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
import { ModalAdultComponent } from '../modals/modal-adult/modal-adult.component';
var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(modalService) {
        this.modalService = modalService;
        this.samplePagesCollapsed = true;
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    SidebarComponent.prototype.addMember = function () {
        this.editingMode = false;
        this.openNewMemberModal(ModalAdultComponent);
    };
    SidebarComponent.prototype.openNewMemberModal = function (content) {
        var modalRef = this.modalService.open(content, { backdrop: 'static', keyboard: false, size: 'lg' });
        modalRef.componentInstance.editMode = this.editingMode;
        modalRef.componentInstance.title = this.editingMode ? 'Editar miembro' : 'Crear miembro';
    };
    SidebarComponent = __decorate([
        Component({
            selector: 'app-sidebar',
            templateUrl: './sidebar.component.html',
            styleUrls: ['./sidebar.component.scss']
        }),
        __metadata("design:paramtypes", [NgbModal])
    ], SidebarComponent);
    return SidebarComponent;
}());
export { SidebarComponent };
//# sourceMappingURL=sidebar.component.js.map