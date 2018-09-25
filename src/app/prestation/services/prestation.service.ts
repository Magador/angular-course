import { Injectable } from '@angular/core';
import { PrestationModel } from '../../shared/models/prestation.model';
import { prestationData } from './prestation-data';

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
}
