import localesCo from "@angular/common/locales/es-CO";
import { AgGridModule } from "ag-grid-angular";
import { AppRoutingModule } from "./app-routing.module";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
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
import { PermissionsComponent } from "./pages/permissions/permissions.component";
import { ProductCrudComponent } from "./pages/products/product-crud/product-crud.component";
import { ProductsComponent } from "./pages/products/products.component";
import { RecoveryComponent } from "./pages/recovery/recovery.component";
import { RegisterComponent } from "./pages/register/register.component";
import { ReportsComponent } from "./pages/reports/reports.component";
import { RolesComponent } from "./components/roles/roles.component";
import { RootComponent } from "src/root.component";
import { SchedulesComponent } from "./pages/schedules/schedules.component";
import { SettingsComponent } from "./pages/settings/settings.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { StatusComponent } from "./components/status/status.component";
import { UserCrudComponent } from "./pages/users/user-crud/user-crud.component";
import { UsersComponent } from "./pages/users/users.component";

registerLocaleData(localesCo);

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    FooterComponent,
    LoginComponent,
    NavbarComponent,
    PermissionsComponent,
    ProductCrudComponent,
    ProductsComponent,
    RecoveryComponent,
    RegisterComponent,
    ReportsComponent,
    RolesComponent,
    RootComponent,
    SchedulesComponent,
    SettingsComponent,
    SidebarComponent,
    StatusComponent,
    UserCrudComponent,
    UsersComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
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
  entryComponents: [StatusComponent, RolesComponent]
})
export class AppModule {}
