import { PrestationState } from '../enums/prestation-state.enum';

export interface PrestationDataHolder {
  id: string;
  type: string;
  client: string;
  numberOfDays: number;
  adrExclTax: number;
  vatRate: number;
  state: PrestationState;
}
