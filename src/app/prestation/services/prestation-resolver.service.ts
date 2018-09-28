import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from '@angular/router';
import { PrestationModel } from '../../shared/models/prestation.model';
import { PrestationService } from './prestation.service';
import { take, mergeMap } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrestationResolverService implements Resolve<PrestationModel> {
  constructor(
    private prestationService: PrestationService,
    private router: Router
  ) {}

  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const id = route.paramMap.get('id');

    return this.prestationService.getPrestation(id).pipe(
      take(1),
      mergeMap(p => {
        if (p) {
          return of(p);
        } else {
          this.router.navigate(['..']);
        }
      })
    );
  }
}
