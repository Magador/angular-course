import { Injectable } from '@angular/core';
import { PrestationModel } from '../../shared/models/prestation.model';
import { prestationData } from './prestation-data';
import { PrestationState } from '../../shared/enums/prestation-state.enum';

@Injectable({
  providedIn: 'root'
})
export class PrestationService {
  private _collection: PrestationModel[];

  constructor() {
    this._collection = prestationData;
  }

  get collection(): PrestationModel[] {
    return this._collection;
  }

  set collection(collection: PrestationModel[]) {
    this._collection = collection;
  }

  public updatePrestationState(
    prestation: PrestationModel,
    state: PrestationState
  ) {
    prestation.state = state;
  }

  public addPrestation(prestation: PrestationModel): void {
    this.collection.push(prestation);
  }

  public updatePrestation(prestation: PrestationModel): void {
    const persistedPrestation = this.collection.filter(
      p => p.id === prestation.id
    )[0];
    if (persistedPrestation) {
      Object.assign(persistedPrestation, prestation);
    }
  }
}
