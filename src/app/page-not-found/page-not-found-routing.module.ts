import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './containers/page-not-found/page-not-found.component';

const pageNotFoundRoutes: Routes = [
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forChild(pageNotFoundRoutes)]
})
export class PageNotFoundRoutingModule {}
