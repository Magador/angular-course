import { PrestationState } from '../enums/prestation-state.enum';

export interface Prestation {
  id: string;
  type: string;
  client: string;
  numberOfDays: number;
  adrExclTax: number;
  vatRate: number;
  state: PrestationState;
}
