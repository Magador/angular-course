import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PrestationListComponent } from './containers/prestation-list/prestation-list.component';

const prestationRoutes: Routes = [
  { path: '', component: PrestationListComponent }
];

@NgModule({
  imports: [RouterModule.forChild(prestationRoutes)]
})
export class PrestationRoutingModule {}
