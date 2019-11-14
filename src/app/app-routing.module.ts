import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";
import { AuthGuard } from "./services/guards/auth.guard";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { LoginComponent } from "./pages/login/login.component";
import { OrdersComponent } from "./pages/orders/orders.component";
import { PermissionsComponent } from "./pages/permissions/permissions.component";
import { ProductsComponent } from "./pages/products/products.component";
import { RecoveryComponent } from "./pages/recovery/recovery.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ReportsComponent } from "./pages/reports/reports.component";
import { SchedulesComponent } from "./pages/schedules/schedules.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { UsersComponent } from "./pages/users/users.component";

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
      { path: "users", component: UsersComponent, canActivate: [AuthGuard] },
      {
        path: "products",
        component: ProductsComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "orders",
        component: OrdersComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "schedules",
        component: SchedulesComponent,
        canActivate: [AuthGuard]
      },
      {
        path: "permissions",
        component: PermissionsComponent,
        canActivate: [AuthGuard]
      }
    ]
  },
  { path: "login", component: LoginComponent },
  { path: "recovery", component: RecoveryComponent },
  { path: "register", component: RegisterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
