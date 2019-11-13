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

  public createPermissiom(data: any) {
    return this.globalService
      .post(Constant.Endpoints.PERMISSION.BASE, data)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public updatePermissiom(data: any) {
    return this.globalService
      .put(Constant.Endpoints.PERMISSION.BASE + "/" + data.id, data)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public acceptPermissiom(data: any) {
    return this.globalService
      .put(Constant.Endpoints.PERMISSION.ACCEPT + "/" + data.id, data)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
