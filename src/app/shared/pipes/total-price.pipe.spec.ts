import { TotalPricePipe } from './total-price.pipe';

describe('TotalPipe', () => {
  it('create an instance', () => {
    const pipe = new TotalPricePipe();
    expect(pipe).toBeTruthy();
  });
});
