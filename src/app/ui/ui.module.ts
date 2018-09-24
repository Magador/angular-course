import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { UiComponent } from './containers/ui/ui.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavComponent } from './components/nav/nav.component';
import { PrestationModule } from '../prestation/prestation.module';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, PrestationModule],
  declarations: [UiComponent, HeaderComponent, FooterComponent, NavComponent],
  exports: [UiComponent]
})
export class UiModule {}
