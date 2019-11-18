import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Constant } from "../shared/constants";
import { GlobalService } from "src/app/services/global.service";

@Injectable({
  providedIn: "root"
})
export class PermissionService {
  constructor(private globalService: GlobalService) {}

  public getAll(): Observable<any> {
    return this.globalService.get(Constant.Endpoints.PERMISSION.BASE).pipe(
      map(res => {
        return res;
      })
    );
  }

  public getById(id: any) {
    return this.globalService
      .get(Constant.Endpoints.PERMISSION.BASE + "/" + id)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public getByUser(id: any) {
    return this.globalService
      .get(Constant.Endpoints.PERMISSION.BYUSER + "/" + id)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public createPermission(data: any) {
    return this.globalService
      .post(Constant.Endpoints.PERMISSION.BASE, data)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public updatePermission(data: any) {
    return this.globalService
      .put(Constant.Endpoints.PERMISSION.BASE + "/" + data.id, data)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public acceptDenyPermission(data: any) {
    return this.globalService
      .put(Constant.Endpoints.PERMISSION.ACCEPTDENY + "/" + data.id, data)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
