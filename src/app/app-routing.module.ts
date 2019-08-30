import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FinancesComponent } from './pages/finances/finances.component';
import { LoginComponent } from './pages/login/login.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'finances', component: FinancesComponent },
  { path: 'users', component: UsersComponent },
  { path: 'supplies', component: SuppliesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
