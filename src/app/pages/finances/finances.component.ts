import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalDiezmoComponent } from 'src/app/components/modals/modal-diezmo/modal-diezmo.component';

@Component({
  selector: 'app-finances',
  templateUrl: './finances.component.html',
  styleUrls: ['./finances.component.scss']
})
export class FinancesComponent implements OnInit {
  public editingMode: boolean;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  public addDiezmo() {
    this.editingMode = false;
    this.openNewDisciplineModal();
  }

  private openNewDisciplineModal() {
    const modalRef = this.modalService.open(ModalDiezmoComponent, { backdrop: 'static', keyboard: false });
    modalRef.componentInstance.editMode = this.editingMode;
    modalRef.componentInstance.title = this.editingMode ? 'Editar diezmo/diezmador' : 'Crear diezmo/diezmador';
  }

}
