var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import localesCo from '@angular/common/locales/es-CO';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { registerLocaleData, DecimalPipe } from '@angular/common';
import { ApixuService } from '../app/services/apixu.service';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { ListComponent } from './pages/list/list.component';
import { LoginComponent } from './pages/login/login.component';
import { ModalChildComponent } from './components/modals/modal-child/modal-child.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { FinancesModule } from './pages/finances/finances.module';
import { SidebarModule } from './components/sidebar/sidebar.module';
registerLocaleData(localesCo);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        NgModule({
            declarations: [
                AppComponent,
                DashboardComponent,
                FooterComponent,
                ListComponent,
                LoginComponent,
                ModalChildComponent,
                NavbarComponent,
                ReportsComponent,
                SettingsComponent,
            ],
            imports: [
                AppRoutingModule,
                BrowserModule,
                CommonModule,
                FinancesModule,
                FormsModule,
                FormsModule,
                HttpClientModule,
                HttpClientModule,
                NgbModule,
                RouterModule,
                SidebarModule,
            ],
            providers: [ApixuService, { provide: LOCALE_ID, useValue: 'es-CO' }, DecimalPipe, NgbActiveModal],
            bootstrap: [AppComponent],
            entryComponents: [ModalChildComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map