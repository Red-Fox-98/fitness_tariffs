import { FitnessTariff, FitnessTariffDescription } from "src/shared/api/types";

export const getFilteredTariffs = (tariffs: FitnessTariff[], isPopular: boolean): FitnessTariff[] => {
  return tariffs.filter((tariff) => tariff.isPopular === isPopular && !tariff.isDiscount);
};

export const getInitialTariff = (data: FitnessTariff[], tariffName: string): FitnessTariff | undefined => {
  return data.find((item) => item.name == tariffName && !item.isPopular && !item.isDiscount);
};

export const getDescription = (
  data: FitnessTariffDescription[],
  tariffName: string
): FitnessTariffDescription | undefined => {
  return data.find((item) => item.name == tariffName);
};
