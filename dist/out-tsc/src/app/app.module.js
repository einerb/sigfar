var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import localesCo from "@angular/common/locales/es-CO";
import { AgGridModule } from "ag-grid-angular";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FinancesModule } from "./pages/finances/finances.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, LOCALE_ID } from "@angular/core";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { ToastrModule } from "ngx-toastr";
import { registerLocaleData, DecimalPipe } from "@angular/common";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./services/guards/auth.guard";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { FooterComponent } from "./components/footer/footer.component";
import { InterceptRequestsService } from "./services/intercepts/intercept-requests.service";
import { LoginComponent } from "./pages/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { RecoveryComponent } from "./pages/recovery/recovery.component";
import { ReportsComponent } from "./pages/reports/reports.component";
import { RootComponent } from "src/root.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SuppliesComponent } from "./pages/supplies/supplies.component";
import { UsersComponent } from "./pages/users/users.component";
import { UserCrudComponent } from "./pages/users/user-crud/user-crud.component";
import { RegisterComponent } from "./pages/register/register.component";
import { StatusComponent } from "./components/status/status.component";
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
                LoginComponent,
                NavbarComponent,
                RecoveryComponent,
                RegisterComponent,
                ReportsComponent,
                RootComponent,
                SettingsComponent,
                SidebarComponent,
                StatusComponent,
                SuppliesComponent,
                UserCrudComponent,
                UsersComponent,
            ],
            imports: [
                AppRoutingModule,
                BrowserAnimationsModule,
                BrowserModule,
                CommonModule,
                FinancesModule,
                FormsModule,
                HttpClientModule,
                HttpClientModule,
                HttpClientModule,
                NgbModule,
                ReactiveFormsModule,
                RouterModule,
                AgGridModule.withComponents([]),
                ToastrModule.forRoot()
            ],
            providers: [
                AuthGuard,
                InterceptRequestsService,
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: InterceptRequestsService,
                    multi: true
                },
                { provide: LOCALE_ID, useValue: "es-CO" },
                DecimalPipe,
                NgbActiveModal
            ],
            bootstrap: [RootComponent],
            entryComponents: [StatusComponent]
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map