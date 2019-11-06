var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./services/guards/auth.guard";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { FinancesComponent } from "./pages/finances/finances.component";
import { LoginComponent } from "./pages/login/login.component";
import { RecoveryComponent } from "./pages/recovery/recovery.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ReportsComponent } from "./pages/reports/reports.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { SuppliesComponent } from "./pages/supplies/supplies.component";
import { UsersComponent } from "./pages/users/users.component";
var routes = [
    {
        path: "",
        component: AppComponent,
        children: [
            {
                path: "",
                pathMatch: "full",
                redirectTo: "dashboard",
                canActivate: [AuthGuard]
            },
            {
                path: "dashboard",
                component: DashboardComponent,
                canActivate: [AuthGuard]
            },
            {
                path: "reports",
                component: ReportsComponent,
                canActivate: [AuthGuard]
            },
            {
                path: "settings",
                component: SettingsComponent,
                canActivate: [AuthGuard]
            },
            {
                path: "finances",
                component: FinancesComponent,
                canActivate: [AuthGuard]
            },
            { path: "users", component: UsersComponent, canActivate: [AuthGuard] },
            {
                path: "supplies",
                component: SuppliesComponent,
                canActivate: [AuthGuard]
            }
        ]
    },
    { path: "login", component: LoginComponent },
    { path: "recovery", component: RecoveryComponent },
    { path: "register", component: RegisterComponent }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        NgModule({
            imports: [RouterModule.forRoot(routes)],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map