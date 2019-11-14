import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

import { Constant } from "../shared/constants";
import { GlobalService } from "src/app/services/global.service";

@Injectable({
  providedIn: "root"
})
export class ScheduleService {
  constructor(private globalService: GlobalService) {}

  public getAll(): Observable<any> {
    return this.globalService.get(Constant.Endpoints.SCHEDULE.BASE).pipe(
      map(res => {
        return res;
      })
    );
  }

  public getById(id: any) {
    return this.globalService
      .get(Constant.Endpoints.SCHEDULE.BASE + "/" + id)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public getByUser(id: any) {
    return this.globalService
      .get(Constant.Endpoints.SCHEDULE.BYUSER + "/" + id)
      .pipe(
        map(res => {
          return res;
        })
      );
  }

  public createSchedule(data: any) {
    return this.globalService.post(Constant.Endpoints.SCHEDULE.BASE, data).pipe(
      map(res => {
        return res;
      })
    );
  }

  public updateSchedule(data: any) {
    return this.globalService
      .put(Constant.Endpoints.SCHEDULE.BASE + "/" + data.id, data)
      .pipe(
        map(res => {
          return res;
        })
      );
  }
}
