import localesCo from "@angular/common/locales/es-CO";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FinancesModule } from "./pages/finances/finances.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { NgModule, LOCALE_ID } from "@angular/core";
import { NgbModule, NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { RouterModule } from "@angular/router";
import { registerLocaleData, DecimalPipe } from "@angular/common";
import { ToastrModule } from "ngx-toastr";
import { AgGridModule } from "ag-grid-angular";

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
    UsersComponent,
    UserCrudComponent
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
    HttpClientModule,
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
  bootstrap: [RootComponent]
})
export class AppModule {}
