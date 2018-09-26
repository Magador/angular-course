import { Client } from '../interfaces/client';
import { ClientState } from '../enums/client-state.enum';

export class ClientModel implements Client {
  id: string;
  name: string;
  email: string;
  tel: string;
  contact: string;
  state: ClientState;

  constructor(fields?: Partial<ClientModel>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }
}
