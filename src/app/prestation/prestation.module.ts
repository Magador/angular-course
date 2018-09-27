import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrestationListComponent } from './containers/prestation-list/prestation-list.component';
import { PrestationRoutingModule } from './prestation-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PrestationItemComponent } from './components/prestation-item/prestation-item.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { PrestationFormComponent } from './components/prestation-form/prestation-form.component';
import { AddPrestationComponent } from './containers/add-prestation/add-prestation.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrestationFormReactiveComponent } from './components/prestation-form-reactive/prestation-form-reactive.component';

@NgModule({
  imports: [
    CommonModule,
    PrestationRoutingModule,
    SharedModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    PrestationListComponent,
    PrestationItemComponent,
    PrestationFormComponent,
    AddPrestationComponent,
    PrestationFormReactiveComponent
  ]
})
export class PrestationModule {}
