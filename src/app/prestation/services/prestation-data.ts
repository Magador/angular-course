import { PrestationModel } from '../../shared/models/prestation.model';
import { PrestationState } from '../../shared/enums/prestation-state.enum';

export const prestationData: PrestationModel[] = [
  new PrestationModel({
    id: 'e3',
    type: 'Formation',
    client: 'Modis',
    numberOfDays: 2,
    exclTaxADR: 500,
    state: PrestationState.CONFIRMED
  }),
  new PrestationModel({
    id: 'a4',
    type: 'Coaching',
    client: 'EduGroupe',
    numberOfDays: 3,
    exclTaxADR: 550
  })
];
