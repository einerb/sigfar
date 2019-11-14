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
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from "@angular/forms";
import { ToastrService } from "ngx-toastr";
import { IMyDrpOptions } from "mydaterangepicker";

import { PermissionService } from "src/app/services";
import { Constant } from "../../../shared/constants";

@Component({
  selector: "app-permission-crud",
  templateUrl: "./permission-crud.component.html",
  styleUrls: ["./permission-crud.component.scss"]
})
export class PermissionCrudComponent implements OnInit, OnChanges {
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
    private permissionService: PermissionService
  ) {
    this.user = Constant.AUTH.getUser();

    this.form = this.fb.group({
      id: [""],
      type: ["", [Validators.required]],
      description: ["", [Validators.required]],
      dateOfService: ["", [Validators.required]],
      user_id: new FormControl(this.user.id),
      status: [""]
    });
  }

  ngOnInit() {
    if (this.id) {
      this.visible = true;
    } else {
      this.visible = false;
    }
  }

  get f() {
    return this.form.controls;
  }

  public acceptDenyPermission() {
    const data = {
      id: this.id,
      status: this.form.get("status").value
    };

    this.permissionService.acceptDenyPermissiom(data).subscribe(
      () => {
        this.onSuccess();
        this.close();
      },
      err => {
        this.onFailure(err);
      }
    );
  }

  public close() {
    this.closeCreate.emit();
  }

  public load() {
    this.permissionService.getById(this.id).subscribe(
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
    }
  }

  public onSave() {
    this.submitted = true;

    if (this.form.invalid) {
      return;
    }

    this.createPermission();
  }

  private createPermission() {
    this.startDate = this.getFormatted(this.form.value.dateOfService.beginDate);
    this.endDate = this.getFormatted(this.form.value.dateOfService.endDate);

    const data = {
      type: this.form.get("type").value,
      description: this.form.get("description").value,
      date_start: this.startDate,
      date_end: this.endDate,
      user_id: this.user.id
    };

    this.permissionService.createPermissiom(data).subscribe(
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

  private onSuccess() {
    this.toastr.success("Operación exitosa..", "", {
      timeOut: 1000
    });

    this.form.reset();
  }

  private onFailure(err) {
    Swal.fire({
      type: "error",
      title: err.code,
      text: err.error.errors
    });
  }
}
