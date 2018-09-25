import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationListComponent } from './containers/prestation-list/prestation-list.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, PrestationRoutingModule, SharedModule],
  declarations: [PrestationListComponent]
})
export class PrestationModule {}
