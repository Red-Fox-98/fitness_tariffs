import { FC } from "react";
import { FitnessTariff, FitnessTariffDescription, FitnessTariffSale } from "src/shared/api/types";
import TariffMap from "src/features/homePage/tariffMap/TariffMap";

interface TariffModuleProps {
  tariffs: FitnessTariff[];
  sales: FitnessTariffSale[];
  descriptions: FitnessTariffDescription[];
}

const TariffModule: FC<TariffModuleProps> = ({ tariffs, sales, descriptions }) => {
  return (
    <div className={"w-[585px]"}>
      <TariffMap tariffs={tariffs} sales={sales} descriptions={descriptions} />
    </div>
  );
};

export default TariffModule;
