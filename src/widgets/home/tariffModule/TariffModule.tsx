import { FC } from "react";
import { FitnessTariff, FitnessTariffDescription } from "src/shared/api/types";
import TariffCard from "src/features/homePage/tariffCard/TariffCard";

interface TariffModuleProps {
  tariffs: FitnessTariff[];
  tariffsDescription: FitnessTariffDescription[];
}

const TariffModule: FC<TariffModuleProps> = ({ tariffs, tariffsDescription }) => {
  return (
    <div className={"w-[585px]"}>
      <TariffCard tariffs={tariffs} tariffsDescription={tariffsDescription} />
    </div>
  );
};

export default TariffModule;
