import { Pipe, PipeTransform } from '@angular/core';
import { PrestationModel } from '../models/prestation.model';

@Pipe({
  name: 'totalPrice'
})
export class TotalPricePipe implements PipeTransform {
  transform(value: PrestationModel, vatRate?: number): number {
    if (!value) {
      return;
    }
    if (vatRate) {
      return value.includedTaxTotal(vatRate);
    }
    return value.excludedTaxTotal();
  }
}
