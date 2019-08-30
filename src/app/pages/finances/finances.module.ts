import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ModalDiezmoComponent } from '../../components/modals/modal-diezmo/modal-diezmo.component';
import { FinancesComponent } from './finances.component';

@NgModule({
  declarations: [ModalDiezmoComponent, FinancesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [FinancesComponent],
  entryComponents: [ModalDiezmoComponent]
})
export class FinancesModule { }
