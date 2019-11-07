import { Component, OnInit } from "@angular/core";
import { GridOptions } from "ag-grid-community";

import { StatusComponent } from "src/app/components/status/status.component";
import { ScheduleService } from "../../services/schedule.service";
import { Constant } from "../../shared/constants";

@Component({
  selector: "app-schedules",
  templateUrl: "./schedules.component.html",
  styleUrls: ["./schedules.component.scss"]
})
export class SchedulesComponent implements OnInit {
  public schedules = [];
  public user;
  public data: any;
  public overlayLoadingTemplate;
  public gridSchedule;
  public id: any;
  public showCreate = false;

  constructor(private scheduleService: ScheduleService) {
    this.gridSchedule = {} as GridOptions;
    const self = this;

    this.gridSchedule = {
      columnDefs: [
        {
          headerName: "Usuario",
          valueGetter: function(params) {
            return (
              params.data.user[0].name + " " + params.data.user[0].lastname
            );
          },
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Descripción",
          field: "description"
        },
        {
          headerName: "Fecha inicio",
          field: "date_start",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Fecha final",
          field: "date_start",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Tiempo inicio",
          field: "time_start",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Tiempo final",
          field: "time_end",
          cellStyle: { textAlign: "center" }
        },
        {
          headerName: "Estado",
          field: "status",
          cellRendererFramework: StatusComponent,
          cellStyle: { textAlign: "center" }
        }
      ],
      defaultColDef: {
        sortable: true,
        resizable: true
      },
      headerHeight: 50,
      rowHeight: 35
    };

    this.overlayLoadingTemplate =
      "<span class='ag-overlay-loading-center'>Por favor espere mientras cargan los datos</span>";

    this.gridSchedule.onGridReady = () => {
      self.gridSchedule.api.sizeColumnsToFit();
      self.gridSchedule.api.showLoadingOverlay();
    };
  }

  ngOnInit() {
    this.user = Constant.AUTH.getUser();

    this.allSchedules();
  }

  public setSelected(row) {
    this.id = row.data.id;
    this.showCreate = true;
    this.data = row.data;
  }

  private allSchedules() {
    this.scheduleService.getAll().subscribe(res => {
      this.schedules = res.data;
    });
  }

  public closeCreate() {
    this.showCreate = false;
    this.allSchedules();
  }

  public create() {
    this.id = null;
    this.showCreate = !this.showCreate;
  }
}
