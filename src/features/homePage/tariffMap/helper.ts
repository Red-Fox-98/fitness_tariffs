import { FitnessTariff, FitnessTariffDescription, FitnessTariffSale } from "src/shared/api/types";

export const getFilteredTariffs = (tariffs: FitnessTariff[], isPopular: boolean): FitnessTariff[] => {
  return tariffs.filter((tariff) => tariff.isPopular === isPopular && !tariff.isDiscount);
};

export const getInitialTariff = (data: FitnessTariff[], tariffName: string): number => {
  return data.find((item) => item.name == tariffName && !item.isPopular && !item.isDiscount)?.price || 0;
};

export const getSale = (tariff: FitnessTariff, sales: FitnessTariffSale[]): number => {
  return (
    sales.find(
      (sale) => sale.name == tariff.name && sale.isPopular == tariff.isPopular && sale.isDiscount == tariff.isDiscount
    )?.sale || 0
  );
};

export const getDescription = (data: FitnessTariffDescription[], tariffName: string): string => {
  return data.find((item) => item.name == tariffName)?.description || "";
};
