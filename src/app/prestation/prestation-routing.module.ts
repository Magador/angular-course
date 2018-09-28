import { NgModule } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { PrestationListComponent } from './containers/prestation-list/prestation-list.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { EditPrestationComponent } from './containers/edit-prestation/edit-prestation.component';
import { PrestationResolverService } from './services/prestation-resolver.service';

const prestationRoutes: Routes = [
  { path: '', component: PrestationListComponent },
  { path: 'add', component: AddPrestationComponent },
  {
    path: ':id/edit',
    component: EditPrestationComponent,
    resolve: { prestation: PrestationResolverService }
  }
];

@NgModule({
  imports: [RouterModule.forChild(prestationRoutes)]
})
export class PrestationRoutingModule {}
