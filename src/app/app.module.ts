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

import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './pages/login/login.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ReportsComponent } from './pages/reports/reports.component';
import { SettingsComponent } from './pages/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';

import { FinancesModule } from './pages/finances/finances.module';
import { UsersComponent } from './pages/users/users.component';
import { SuppliesComponent } from './pages/supplies/supplies.component';
import { ModalUserComponent } from './components/modals/modal-user/modal-user.component';

registerLocaleData(localesCo);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    ReportsComponent,
    SettingsComponent,
    SidebarComponent,
    SuppliesComponent,
    UsersComponent,
    ModalUserComponent,
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
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'es-CO' }, DecimalPipe, NgbActiveModal],
  bootstrap: [AppComponent],
})
export class AppModule { }
