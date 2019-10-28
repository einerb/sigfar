import { Component, OnInit, ViewChild, Input } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { NgForm } from "@angular/forms";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: "app-modal-user",
  templateUrl: "./modal-user.component.html",
  styleUrls: ["../styles-modal.scss"]
})
export class ModalUserComponent implements OnInit {
  @ViewChild("newUserForm", { static: false }) newUserForm: NgForm;
  @Input() editMode: boolean;
  @Input() userData: any;
  @Input() title: string;

  private userDataCopy: any;
  public hoy = new Date();

  constructor(private newUserModal: NgbActiveModal) {}

  ngOnInit() {}

  public onSave = () => {
    this.newUserForm.ngSubmit.emit();
    if (this.newUserForm.valid) {
      console.log(this.userDataCopy);
      if (this.editMode) {
        // this.userService.updateUser(this.userDataCopy).then(this.onSuccess, this.onFailure);
      } else {
        // this.userService.createUser(this.userDataCopy).then(this.onSuccess, this.onFailure);
      }
    } else {
      // TODO: Display Error in some way here
    }
  };

  private onSuccess = () => {
    this.newUserModal.close();
  };

  private onFailure = (res: HttpErrorResponse) => {
    alert(
      "Error: No se pudo completar la operación porque ocurrió un error interno!"
    );
    console.log(res);
  };
}
