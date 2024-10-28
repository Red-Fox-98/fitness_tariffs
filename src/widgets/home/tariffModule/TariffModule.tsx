import { FC } from "react";
import { FitnessTariff, FitnessTariffDescription } from "src/shared/api/types";
import TariffMap from "src/features/homePage/tariffMap/TariffMap";

interface TariffModuleProps {
  tariffs: FitnessTariff[];
  tariffsDescription: FitnessTariffDescription[];
}

const TariffModule: FC<TariffModuleProps> = ({ tariffs, tariffsDescription }) => {
  return (
    <div className={"w-[585px]"}>
      <TariffMap tariffs={tariffs} tariffsDescription={tariffsDescription} />
    </div>
  );
};

export default TariffModule;
