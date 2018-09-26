import { ClientModel } from '../../shared/models/client.model';
import { ClientState } from '../../shared/enums/client-state.enum';

export const clientData: ClientModel[] = [
  new ClientModel({
    id: 'f5',
    name: 'Capgemini',
    email: 'capgemini@example.com',
    contact: 'Maybe ?',
    tel: '(413)-441-8278',
    state: ClientState.ACTIVE
  }),
  new ClientModel({
    id: 'g7',
    name: 'Atos',
    email: 'atos@example.com',
    contact: 'Maybe ?',
    tel: '(198)-397-3774',
    state: ClientState.INACTIVE
  })
];
