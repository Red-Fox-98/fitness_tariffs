import { FC, useEffect, useState } from "react";
import { useAppSelector } from "src/shared/store/hooks";
import { FitnessTariff, FitnessTariffDescription, FitnessTariffSale } from "src/shared/api/types";
import { getDescription, getFilteredTariffs, getInitialTariff, getSale } from "src/features/homePage/tariffMap/helper";
import Tariff from "src/features/homePage/tariff/Tariff";
import DescriptionTariffMap from "src/entities/home/descriptionTariffMap/DescriptionTariffMap";

interface TariffCardProps {
  tariffs: FitnessTariff[];
  sales: FitnessTariffSale[];
  descriptions: FitnessTariffDescription[];
}

const TariffMap: FC<TariffCardProps> = ({ tariffs, sales, descriptions }) => {
  const isPopular = useAppSelector((state) => state.time.isPopular);
  const [filteredTariffs, setFilteredTariffs] = useState(getFilteredTariffs(tariffs, isPopular));

  useEffect(() => {
    setFilteredTariffs(getFilteredTariffs(tariffs, isPopular));
  }, [tariffs, isPopular]);

  return (
    <div className={"flex flex-col xs:mx-auto xs:w-[375px]"}>
      <div className={"grid gap-[12px] grid-cols-3 xs:flex xs:flex-col"}>
        {filteredTariffs.slice(0, 3).map((tariff) => (
          <Tariff
            key={tariff.id}
            tariff={tariff}
            description={getDescription(descriptions, tariff.name)}
            priceInitial={getInitialTariff(tariffs, tariff.name)}
            sale={getSale(tariff, sales)}
          />
        ))}
      </div>
      {filteredTariffs[3] && (
        <div className={"pt-[40px] xs:pt-[10px]"}>
          <Tariff
            tariff={filteredTariffs[3]}
            description={getDescription(descriptions, filteredTariffs[3].name)}
            priceInitial={getInitialTariff(tariffs, filteredTariffs[3].name)}
            sale={getSale(filteredTariffs[3], sales)}
          />
        </div>
      )}
      <DescriptionTariffMap />
    </div>
  );
};

export default TariffMap;
