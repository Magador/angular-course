import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TotalPricePipe } from './pipes/total-price.pipe';

@NgModule({
  imports: [CommonModule],
  declarations: [TotalPricePipe],
  exports: [TotalPricePipe]
})
export class SharedModule {}
