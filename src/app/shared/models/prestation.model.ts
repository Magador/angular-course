import { Prestation } from '../interfaces/prestation';
import { PrestationState } from '../enums/prestation-state.enum';

export class PrestationModel implements Prestation {
  id: string;
  type: string;
  client: string;
  numberOfDays = 0;
  exclTaxADR = 0;
  vatRate = 0.2;
  state: PrestationState = PrestationState.OPTION;

  constructor(fields?: Partial<PrestationModel>) {
    if (fields) {
      Object.assign(this, fields);
    }
  }

  public excludedTaxTotal() {
    console.count('excludedTaxTotal called');
    return this.numberOfDays * this.exclTaxADR;
  }

  public includedTaxTotal(vatRate?: number) {
    console.count('includedTaxTotal called');
    let rate = vatRate !== undefined ? vatRate : this.vatRate;
    if (rate < 0) {
      rate = 0;
    }
    return this.excludedTaxTotal() * (1 + rate);
  }
}
