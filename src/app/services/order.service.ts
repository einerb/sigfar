import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Constant } from "../shared/constants";
import { GlobalService } from "src/app/services/global.service";

@Injectable({
  providedIn: "root"
})
export class OrderService {
  constructor(private globalService: GlobalService) {}

  public getAll(): Observable<any> {
    return this.globalService.get(Constant.Endpoints.ORDER.BASE).pipe(
      map(res => {
        return res;
      })
    );
  }

  public getByUser(id: any) {
    return this.globalService
      .get(Constant.Endpoints.ORDER.BYUSER + "/" + id)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public createOrder(data: any) {
    return this.globalService.post(Constant.Endpoints.ORDER.BASE, data).pipe(
      map(res => {
        return res;
      })
    );
  }

  public createOrderDetail(data: any) {
    return this.globalService
      .post(Constant.Endpoints.ORDER.ORDERDETAILS , data)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
