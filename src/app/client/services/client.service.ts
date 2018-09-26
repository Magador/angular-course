import { Injectable } from '@angular/core';
import { ClientModel } from '../../shared/models/client.model';
import { clientData } from './client-data';
import { ClientState } from '../../shared/enums/client-state.enum';

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private _collection: ClientModel[];

  constructor() {
    this._collection = clientData;
  }

  get collection(): ClientModel[] {
    return this._collection;
  }

  set collection(collection: ClientModel[]) {
    this._collection = collection;
  }

  public updateClientState(client: ClientModel, state: ClientState) {
    client.state = state;
  }
}
