import { NgModule } from '@angular/core';
import {
  RouterModule,
  Routes,
  Router,
  PreloadAllModules
} from '@angular/router';

const appRoutes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'prestation',
    loadChildren: './prestation/prestation.module#PrestationModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      enableTracing: false,
      preloadingStrategy: PreloadAllModules
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
  constructor(router: Router) {
    // console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
  }
}
