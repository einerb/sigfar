import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

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
    const modalRef = this.modalService.open('', { backdrop: 'static', keyboard: false });
    modalRef.componentInstance.editMode = this.editingMode;
    modalRef.componentInstance.title = this.editingMode ? 'Editar diezmo/diezmador' : 'Crear diezmo/diezmador';
  }

}
