import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { UiComponent } from './containers/ui/ui.component';

@NgModule({
  imports: [CommonModule, FontAwesomeModule, RouterModule],
  declarations: [UiComponent, HeaderComponent, FooterComponent, NavComponent],
  exports: [UiComponent]
})
export class UiModule {}
