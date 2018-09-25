import { PrestationState } from '../enums/prestation-state.enum';

export interface Prestation {
  id: string;
  type: string;
  client: string;
  dayLength: number;
  tjmHt: number;
  state: PrestationState;
}
