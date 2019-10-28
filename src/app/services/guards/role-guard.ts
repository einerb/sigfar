import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Constant } from "../../shared/constants";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  CanActivateChild
} from "@angular/router";

import { AuthenticationService } from "../authentication.service";

@Injectable({
  providedIn: "root"
})
@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private _router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user.userType_id === next.data.userType_id) {
      return true;
    }
    /* const  userType: any = Constant.USERTYPES.find (res => res.value === user.userType_id); */

    /* this._router.navigate(['/home/'+ userType.url]); */
    return false;
  }
}
