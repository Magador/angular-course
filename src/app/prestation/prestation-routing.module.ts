import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PrestationListComponent } from './containers/prestation-list/prestation-list.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';

const prestationRoutes: Routes = [
  { path: '', component: PrestationListComponent },
  { path: 'add', component: AddPrestationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(prestationRoutes)]
})
export class PrestationRoutingModule {}
