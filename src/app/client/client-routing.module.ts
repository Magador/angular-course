import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientListComponent } from './containers/client-list/client-list.component';

const prestationRoutes: Routes = [{ path: '', component: ClientListComponent }];

@NgModule({
  imports: [RouterModule.forChild(prestationRoutes)]
})
export class ClientRoutingModule {}
