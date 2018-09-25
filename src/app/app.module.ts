import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { AppComponent } from "./app.component";
import { LoginModule } from "./login/login.module";
import { PageNotFoundModule } from "./page-not-found/page-not-found.module";
import { UiModule } from "./ui/ui.module";
import { AppRoutingModule } from "./app-routing.module";
import { PrestationsModule } from "./prestations/prestations.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    UiModule,
    NgbModule.forRoot(),
    AppRoutingModule,
    LoginModule,
    PrestationsModule,
    PageNotFoundModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
