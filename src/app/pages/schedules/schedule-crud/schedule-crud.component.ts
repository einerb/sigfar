import Swal from "sweetalert2";
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  Output,
  EventEmitter
} from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { IMyDrpOptions } from "mydaterangepicker";

import { ScheduleService, UserService } from "src/app/services";
import { Constant } from "../../../shared/constants";

@Component({
  selector: "app-schedule-crud",
  templateUrl: "./schedule-crud.component.html",
  styleUrls: ["./schedule-crud.component.scss"]
})
export class ScheduleCrudComponent implements OnInit, OnChanges {
  public mytime: Date = new Date();

  public currentYear: any = this.mytime.getUTCFullYear();
  public currentDate: any = this.mytime.getUTCDate();
  public currentMonth: any = this.mytime.getUTCMonth() + 1;

  public myDateRangePickerOptions: IMyDrpOptions = {
    dateFormat: "dd/mm/yyyy",
    indicateInvalidDateRange: true,
    editableDateRangeField: false,
    markCurrentDay: true,
    firstDayOfWeek: "su",
    monthLabels: {
      1: "Ene",
      2: "Feb",
      3: "Mar",
      4: "Abr",
      5: "May",
      6: "Jun",
      7: "Jul",
      8: "Ago",
      9: "Sep",
      10: "Oct",
      11: "Nov",
      12: "Dic"
    },
    dayLabels: {
      su: "Dom",
      mo: "Lun",
      tu: "Mar",
      we: "Mié",
      th: "Jue",
      fr: "Vie",
      sa: "Sáb"
    },
    disableUntil: {
      year: this.currentYear,
      month: this.currentMonth,
      day: this.currentDate - 1
    }
  };

  public form: FormGroup;
  public loading = false;
  public submitted = false;
  public users: any;
  public user;
  public visible = false;
  public startDate;
  public endDate;
  @Input() id: number;
  @Output() closeCreate: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder,
    private toastr: ToastrService,
    private scheduleService: ScheduleService,
    private userService: UserService
  ) {
    this.createForm();
  }

  ngOnInit() {
    this.user = Constant.AUTH.getUser();

    if (this.id) {
      this.visible = true;
    } else {
      this.visible = false;
    }

    this.allUsers();
  }

  get f() {
    return this.form.controls;
  }

  public close() {
    this.closeCreate.emit();
  }

  public load() {
    this.scheduleService.getById(this.id).subscribe(
      (res: any) => {
        this.myPacthValue(res.data[0]);
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  public myPacthValue(resp) {
    this.loading = false;
    this.form.patchValue(resp);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes["id"].currentValue) {
      this.loading = true;
      this.load();
    } else {
      this.resetForm();
    }
  }

  public onSave() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    if (this.id) {
      this.visible = true;
      this.updateSchedule();
    } else {
      this.visible = false;
      this.createSchedule();
    }
  }

  private createForm() {
    this.form = this.fb.group({
      id: [""],
      description: ["", [Validators.required]],
      dateOfService: ["", [Validators.required]],
      time_start: ["", [Validators.required]],
      time_end: ["", [Validators.required]],
      user_id: ["", [Validators.required]],
      status: [""]
    });
  }

  private createSchedule() {
    this.startDate = this.getFormatted(this.form.value.dateOfService.beginDate);
    this.endDate = this.getFormatted(this.form.value.dateOfService.endDate);

    const data = {
      description: this.form.get("description").value,
      date_start: this.startDate,
      date_end: this.endDate,
      time_start: this.form.get("time_start").value,
      time_end: this.form.get("time_end").value,
      user_id: this.user.id
    };

    this.scheduleService.createSchedule(data).subscribe(
      () => {
        this.onSuccess();
        this.close();
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  private getFormatted(date) {
    const month = date.month < 10 ? "0" + date.month : date.month;
    const day = date.day < 10 ? "0" + date.day : date.day;
    return `${date.year}-${month}-${day}`;
  }

  private updateSchedule() {
    this.startDate = this.getFormatted(this.form.value.dateOfService.beginDate);
    this.endDate = this.getFormatted(this.form.value.dateOfService.endDate);

    const data = {
      id: this.id,
      description: this.form.get("description").value,
      date_start: this.startDate,
      date_end: this.endDate,
      time_start: this.form.get("time_start").value,
      time_end: this.form.get("time_end").value,
      user_id: this.user.id,
      status: this.form.get("status").value
    };

    this.scheduleService.updateSchedule(data).subscribe(
      () => {
        this.onSuccess();
        this.close();
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  private onSuccess() {
    this.toastr.success("Operación exitosa..", "", {
      timeOut: 1000
    });
  }

  private onFailure(err) {
    Swal.fire({
      type: "error",
      title: err.code,
      text: err.message
    });
  }

  private resetForm() {
    this.form.reset();
    this.form.patchValue({
      active: true
    });
  }

  private allUsers() {
    this.userService.getAll().subscribe(res => {
      this.users = res.data;
    });
  }
}
