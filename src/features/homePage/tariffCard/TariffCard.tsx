import { FC, useEffect, useState } from "react";
import { useAppSelector } from "src/shared/store/hooks";
import { FitnessTariff, FitnessTariffDescription } from "src/shared/api/types";
import { getDescription, getFilteredTariffs, getInitialTariff } from "src/features/homePage/tariffCard/helper";
import Tariff from "src/features/homePage/tariff/Tariff";

interface TariffCardProps {
  tariffs: FitnessTariff[];
  tariffsDescription: FitnessTariffDescription[];
}

const TariffCard: FC<TariffCardProps> = ({ tariffs, tariffsDescription }) => {
  const isPopular = useAppSelector((state) => state.time.isPopular);
  const [filteredTariffs, setFilteredTariffs] = useState(getFilteredTariffs(tariffs, isPopular));

  useEffect(() => {
    setFilteredTariffs(getFilteredTariffs(tariffs, isPopular));
  }, [tariffs, isPopular]);

  return (
    <div className={"flex flex-col"}>
      <div className={"grid gap-[12px] grid-cols-3"}>
        {filteredTariffs.slice(0, 3).map((tariff) => (
          <Tariff
            key={tariff.id}
            tariff={tariff}
            descriptionTariff={getDescription(tariffsDescription, tariff.name)}
            initialTariff={getInitialTariff(tariffs, tariff.name)}
          />
        ))}
      </div>
      {filteredTariffs[3] && (
        <div className={"pt-[40px]"}>
          <Tariff
            tariff={filteredTariffs[3]}
            descriptionTariff={getDescription(tariffsDescription, filteredTariffs[3].name)}
            initialTariff={getInitialTariff(tariffs, filteredTariffs[3].name)}
          />
        </div>
      )}
    </div>
  );
};

export default TariffCard;
