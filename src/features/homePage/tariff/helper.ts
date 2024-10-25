export const getSale = (price: number, initialTariff: number) => {
  return +(1 - price / initialTariff).toFixed(1) * 100;
};
