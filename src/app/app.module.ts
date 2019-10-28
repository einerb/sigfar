import localesCo from "@angular/common/locales/es-CO";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FinancesModule } from "./pages/finances/finances.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { NgModule, LOCALE_ID } from "@angular/core";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { UsersModule } from "./pages/users/users.module";
import { registerLocaleData, DecimalPipe } from "@angular/common";
import { ToastrModule } from "ngx-toastr";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { FooterComponent } from "./components/footer/footer.component";
import { LoginComponent } from "./pages/login/login.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { ReportsComponent } from "./pages/reports/reports.component";
import { RootComponent } from "src/root.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { SuppliesComponent } from "./pages/supplies/supplies.component";
import { RecoveryComponent } from "./pages/recovery/recovery.component";

registerLocaleData(localesCo);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    RecoveryComponent,
    ReportsComponent,
    RootComponent,
    SettingsComponent,
    SidebarComponent,
    SuppliesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    CommonModule,
    FinancesModule,
    FormsModule,
    HttpClientModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    RouterModule,
    ToastrModule.forRoot(),
    UsersModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: "es-CO" },
    DecimalPipe,
    NgbActiveModal
  ],
  bootstrap: [RootComponent]
})
export class AppModule {}
