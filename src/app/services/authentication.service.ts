import { Injectable } from "@angular/core";
import { GlobalService } from "../services/global.service";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Constant } from "../shared/constants";
import { LoginModel } from "../models/login.model";

@Injectable({
  providedIn: "root"
})
export class AuthenticationService {
  public redirectUrl: string;

  constructor(private globalService: GlobalService) {}

  /**
   * @description realizar login
   * @returns Observable <any>
   */
  public login(data: LoginModel): Observable<any> {
    return this.globalService
      .post(Constant.Endpoints.AUTH.LOGIN, {
        grant_type: "password",
        email: data.email,
        password: data.password,
        remember_me: true
      })
      .pipe(
        map(res => {
          localStorage.setItem("token", res["access_token"]);
          localStorage.setItem("user", JSON.stringify(res["user"]));

          return res;
        })
      );
  }

  public isLoggedIn() {
    if (localStorage.getItem("token") && localStorage.getItem("user")) {
      return true;
    }
    return false;
  }

  /*   verifyToken() {
    return this.globalService.get(Constant.Endpoints.AUTH.VERIFY_TOKEN);
  } */

  /**
   * logout
   */
  logout(): Observable<any> {
    return this.globalService.get(Constant.Endpoints.AUTH.LOGOUT).pipe(
      map(res => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        return res;
      })
    );
  }
}
