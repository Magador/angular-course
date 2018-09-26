import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableButtonComponent } from './components/table-button/table-button.component';
import { TableComponent } from './components/table/table.component';
import { TotalPricePipe } from './pipes/total-price.pipe';
import { StateDirective } from './directives/state.directive';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  declarations: [
    TotalPricePipe,
    TableComponent,
    TableButtonComponent,
    StateDirective
  ],
  exports: [
    TotalPricePipe,
    TableComponent,
    TableButtonComponent,
    StateDirective
  ]
})
export class SharedModule {}
