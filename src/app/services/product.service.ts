import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Constant } from "../shared/constants";
import { GlobalService } from "src/app/services/global.service";

@Injectable({
  providedIn: "root"
})
export class ProductService {
  constructor(private globalService: GlobalService) {}

  public getAll(): Observable<any> {
    return this.globalService.get(Constant.Endpoints.PRODUCT.BASE).pipe(
      map(res => {
        return res;
      })
    );
  }

  public getAllInventary(): Observable<any> {
    return this.globalService.get(Constant.Endpoints.INVENTORY.BASE).pipe(
      map(res => {
        return res;
      })
    );
  }

  public getById(id: any) {
    return this.globalService
      .get(Constant.Endpoints.PRODUCT.BASE + "/" + id)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public createProduct(data: any) {
    return this.globalService.post(Constant.Endpoints.PRODUCT.BASE, data).pipe(
      map(res => {
        return res;
      })
    );
  }

  public updateProduct(data: any) {
    return this.globalService
      .put(Constant.Endpoints.PRODUCT.BASE + "/" + data.id, data)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
