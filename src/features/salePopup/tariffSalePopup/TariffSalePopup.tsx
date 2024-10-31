import { FC } from "react";
import { FitnessTariff } from "src/shared/api/types";

interface TariffProps {
  tariff: FitnessTariff;
  priceInitial: number;
  sale: number;
  tariffChoice: (tariff: FitnessTariff) => void;
  markCheck: (tariff: FitnessTariff) => boolean;
}

const TariffSalePopup: FC<TariffProps> = ({ tariff, priceInitial, sale, tariffChoice, markCheck }) => {
  return (
    <div
      className={
        "relative pl-[26px] pt-[26px] w-[210px] h-[197px] " +
        "border-[2px] border-E7EAF1 bg-FFFFFF rounded-[20px] " +
        "hover:border-01B9C5100 hover:bg-01B9C55 hover:cursor-pointer"
      }
      onClick={() => tariffChoice(tariff)}
    >
      <div className={"absolute radio top-[31px] right-[27px] bottom-0"}>
        <input checked={markCheck(tariff)} type={"radio"} />
      </div>

      <div>
        <div className={"font-bebasNeueCyrillic text-[26px] text-2D3242"}>{tariff.name}</div>
        <div className={"inline-block h-auto crossing-out font-ptRootUIBold text-2D3242 text-[20px] leading-[110%]"}>
          {priceInitial}
        </div>
      </div>

      <div className={"pl-[14px] pb-[24px] pt-[16px]"}>
        <div className={"line w-[134px]"}></div>
      </div>

      <div className={"relative inline-block"}>
        <div className={"font-ptRootUIBold text-[46px] text-2D3242 leading-[110%]"}>{tariff.price}</div>
        <div
          className={"absolute bg-starPopup w-[50px] h-[50px] top-[-14px] right-[-50px] flex justify-center items-center"}
        >
          <div className={"font-ptRootUIMedium text-FFFFFF text-[13px] leading-[130%]"}>
            <div>{`${-sale}%`}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TariffSalePopup;
