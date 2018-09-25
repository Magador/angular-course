import { PrestationModel } from '../../shared/models/prestation.model';

export const prestationData: PrestationModel[] = [
  new PrestationModel({
    id: 'e3',
    type: 'Formation',
    client: 'Modis',
    numberOfDays: 2,
    adrExclTax: 500
  }),
  new PrestationModel({
    id: 'a4',
    type: 'Coaching',
    client: 'EduGroupe',
    numberOfDays: 3,
    adrExclTax: 550
  })
];
