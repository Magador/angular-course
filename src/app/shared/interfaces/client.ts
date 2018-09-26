import { ClientState } from '../enums/client-state.enum';

export interface Client {
  id: string;
  name: string;
  email: string;
  tel: string;
  contact: string;
  state: ClientState;
}
