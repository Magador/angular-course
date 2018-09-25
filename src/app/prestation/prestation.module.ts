import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationListComponent } from './containers/prestation-list/prestation-list.component';
import { PrestationRoutingModule } from './prestation-routing.module';

@NgModule({
  imports: [CommonModule, PrestationRoutingModule],
  declarations: [PrestationListComponent]
})
export class PrestationModule {}
