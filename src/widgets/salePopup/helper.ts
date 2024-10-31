import { FitnessTariff } from "src/shared/api/types";

export const getFilteredTariffs = (tariffs: FitnessTariff[]): FitnessTariff[] => {
  return tariffs.filter((tariff) => !tariff.isPopular && tariff.isDiscount);
};
