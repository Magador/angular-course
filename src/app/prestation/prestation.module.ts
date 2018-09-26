import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationListComponent } from './containers/prestation-list/prestation-list.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrestationItemComponent } from './components/prestation-item/prestation-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule,
    FontAwesomeModule
  ],
  declarations: [PrestationListComponent, PrestationItemComponent]
})
export class PrestationModule {}
