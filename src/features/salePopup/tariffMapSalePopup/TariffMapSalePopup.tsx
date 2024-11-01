import { FC, useState } from "react";
import { FitnessTariff, FitnessTariffSale } from "src/shared/api/types";
import TariffSalePopup from "src/features/salePopup/tariffSalePopup/TariffSalePopup";
import { getFilteredTariffs } from "src/widgets/salePopup/helper";
import { getInitialTariff, getSale } from "src/features/homePage/tariffMap/helper";

interface TariffCardProps {
  tariffs: FitnessTariff[];
  sales: FitnessTariffSale[];
}

const TariffMapSalePopup: FC<TariffCardProps> = ({ tariffs, sales }) => {
  const [selectedTariff, setSelectedTariff] = useState<FitnessTariff>();
  const filteredTariffs = getFilteredTariffs(tariffs);

  const tariffChoice = (tariff: FitnessTariff): void => {
    setSelectedTariff(tariff);
  };

  const markCheck = (tariff: FitnessTariff) => {
    return tariff.name === selectedTariff?.name;
  };

  return (
    <div className={"flex w-fit gap-[20px] xs:flex-col xs:gap-[2px]"}>
      {filteredTariffs.map((tariff) => (
        <TariffSalePopup
          key={tariff.id}
          tariff={tariff}
          priceInitial={getInitialTariff(tariffs, tariff.name)}
          sale={getSale(tariff, sales)}
          tariffChoice={tariffChoice}
          markCheck={markCheck}
        />
      ))}
    </div>
  );
};

export default TariffMapSalePopup;
