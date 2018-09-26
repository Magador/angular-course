import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { TableButtonComponent } from './components/table-button/table-button.component';
import { TableComponent } from './components/table/table.component';
import { TotalPricePipe } from './pipes/total-price.pipe';
import { PrestationStateDirective } from './directives/prestation-state.directive';
import { ClientStateDirective } from './directives/client-state.directive';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  declarations: [
    TotalPricePipe,
    TableComponent,
    TableButtonComponent,
    PrestationStateDirective,
    ClientStateDirective
  ],
  exports: [
    TotalPricePipe,
    TableComponent,
    TableButtonComponent,
    PrestationStateDirective,
    ClientStateDirective
  ]
})
export class SharedModule {}
