import { Component, OnInit } from "@angular/core";

import { Constant } from "../../shared/constants";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  public samplePagesCollapsed = true;
  public user;

  constructor() {}

  ngOnInit() {
    this.user = Constant.AUTH.getUser();
  }
}
