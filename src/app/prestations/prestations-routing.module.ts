import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { ListPrestationsComponent } from './containers/list-prestations/list-prestations.component';

const prestationsRoutes: Routes = [
  { path: '', component: ListPrestationsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(prestationsRoutes)]
})
export class PrestationsRoutingModule {}
