import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable()
export class EventBusModalService {
  notificationReceived = new Subject<any>();
  pushReceived = this.notificationReceived.asObservable();

  constructor() { }
}
