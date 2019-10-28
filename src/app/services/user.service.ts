import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Constant } from "../shared/constants";
import { GlobalService } from "src/app/services/global.service";

@Injectable({
  providedIn: "root"
})
export class UserService {
  constructor(private globalService: GlobalService) {}

  public getAll(): Observable<any> {
    return this.globalService.get(Constant.Endpoints.USER.BASE).pipe(
      map(res => {
        return res;
      })
    );
  }

  public getById(id: any) {
    return this.globalService.get(Constant.Endpoints.USER.BASE + "/" + id).pipe(
      map(res => {
        return res;
      })
    );
  }

  public createUser(data: any) {
    return this.globalService.post(Constant.Endpoints.USER.BASE, data).pipe(
      map(res => {
        return res;
      })
    );
  }

  public updateUser(data: any) {
    return this.globalService
      .put(Constant.Endpoints.USER.BASE + "/" + data.id, data)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
