import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { ModalUserComponent } from '../../components/modals/modal-user/modal-user.component';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public editingMode: boolean;

  constructor(private modalService: NgbModal) {
  }

  ngOnInit() {
  }

  public addUser() {
    this.editingMode = false;
    this.openUserModal();
  }

  private openUserModal() {
    const modalRef = this.modalService.open(ModalUserComponent, { backdrop: 'static', keyboard: false, size: 'lg' });
    modalRef.componentInstance.editMode = this.editingMode;
    modalRef.componentInstance.title = this.editingMode ? 'Editar usuario' : 'Crear usuario';
  }
}
