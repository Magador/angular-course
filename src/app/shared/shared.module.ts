import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableButtonComponent } from './components/table-button/table-button.component';
import { TableComponent } from './components/table/table.component';
import { TotalPricePipe } from './pipes/total-price.pipe';
import { PrestationStateDirective } from './directives/prestation-state.directive';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  declarations: [
    TotalPricePipe,
    TableComponent,
    TableButtonComponent,
    PrestationStateDirective
  ],
  exports: [
    TotalPricePipe,
    TableComponent,
    TableButtonComponent,
    PrestationStateDirective
  ]
})
export class SharedModule {}
