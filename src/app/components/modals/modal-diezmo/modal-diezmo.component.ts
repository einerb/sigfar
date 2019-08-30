import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-modal-diezmo',
  templateUrl: './modal-diezmo.component.html',
  styleUrls: ['../styles-modal.scss']
})
export class ModalDiezmoComponent implements OnInit {

  @Input() editMode: boolean;
  // @Input() diezmoData: DiezmoApi;
  @Input() title: string;
  @ViewChild('newDiezmoForm', { static: false }) newDiezmoForm: NgForm;

  // private diezmoDataCopy: DiezmoApi;
  public hoy = new Date();

  constructor(private newDiezmoModal: NgbActiveModal) {
  }

  ngOnInit() {
    // this.diezmoDataCopy = new DiezmoApi(this.editMode ? this.diezmoData : null);
  }

  public onSave = () => {
    this.newDiezmoForm.ngSubmit.emit();
    if (this.newDiezmoForm.valid) {
      // console.log(this.diezmoDataCopy);
      if (this.editMode) {
        // this.userService.updateUser(this.userDataCopy).then(this.onSuccess, this.onFailure);
      } else {
        // this.userService.createUser(this.userDataCopy).then(this.onSuccess, this.onFailure);
      }
    } else {
      // TODO: Display Error in some way here
    }
  }

  private onSuccess = () => {
    this.newDiezmoModal.close();
  }

  private onFailure = (res: HttpErrorResponse) => {
    alert('Error: No se pudo completar la operación porque ocurrió un error interno!');
    console.log(res);
  }

}
