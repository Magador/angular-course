import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClientListComponent } from './containers/client-list/client-list.component';
import { SharedModule } from '../shared/shared.module';
import { ClientItemComponent } from './components/client-item/client-item.component';
import { ClientRoutingModule } from './client-routing.module';

@NgModule({
  imports: [CommonModule, SharedModule, ClientRoutingModule],
  declarations: [ClientListComponent, ClientItemComponent]
})
export class ClientModule {}
