import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { FinancesComponent } from "./pages/finances/finances.component";
import { LoginComponent } from "./pages/login/login.component";
import { RecoveryComponent } from "./pages/recovery/recovery.component";
import { ReportsComponent } from "./pages/reports/reports.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { SuppliesComponent } from "./pages/supplies/supplies.component";
import { UsersComponent } from "./pages/users/users.component";
import { AuthGuard } from "./services/guards/auth.guard";

const routes: Routes = [
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
  { path: "recovery", component: RecoveryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
