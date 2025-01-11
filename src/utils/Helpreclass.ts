export function SearchParamSlicec(Prices: string): number[] {
  const priceone = +Prices.split("%")[0];
  const pricetow = +Prices.split("%")[1].slice(2);
  return [priceone, pricetow];
}
