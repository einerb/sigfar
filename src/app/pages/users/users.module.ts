import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ModalUserComponent } from '../../components/modals/modal-user/modal-user.component';
import { UsersComponent } from './users.component';

@NgModule({
  declarations: [UsersComponent, ModalUserComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    NgbModule
  ],
  exports: [UsersComponent],
  entryComponents: [ModalUserComponent]
})
export class UsersModule { }
