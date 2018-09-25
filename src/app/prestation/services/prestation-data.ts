import { PrestationDataHolder } from '../../shared/interfaces/prestation-data-holder';
import { PrestationState } from '../../shared/enums/prestation-state.enum';

export const prestationData: PrestationDataHolder[] = [
  {
    id: 'e3',
    type: 'Formation',
    client: 'Modis',
    numberOfDays: 2,
    adrExclTax: 500,
    vatRate: 0.2,
    state: PrestationState.OPTION
  }
];
