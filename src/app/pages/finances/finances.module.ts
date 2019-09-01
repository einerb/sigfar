import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FinancesComponent } from './finances.component';

@NgModule({
  declarations: [FinancesComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports: [FinancesComponent],
  entryComponents: []
})
export class FinancesModule { }
