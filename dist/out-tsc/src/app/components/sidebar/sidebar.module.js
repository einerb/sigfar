var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UiSwitchModule } from 'ngx-toggle-switch';
import { ModalAdultComponent } from '../modals/modal-adult/modal-adult.component';
import { SidebarComponent } from './sidebar.component';
var SidebarModule = /** @class */ (function () {
    function SidebarModule() {
    }
    SidebarModule = __decorate([
        NgModule({
            declarations: [ModalAdultComponent, SidebarComponent],
            imports: [
                FormsModule,
                CommonModule,
                RouterModule,
                UiSwitchModule
            ],
            exports: [SidebarComponent],
            entryComponents: [ModalAdultComponent]
        })
    ], SidebarModule);
    return SidebarModule;
}());
export { SidebarModule };
//# sourceMappingURL=sidebar.module.js.map