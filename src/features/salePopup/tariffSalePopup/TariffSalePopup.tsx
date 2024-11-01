import { FC } from "react";
import { FitnessTariff } from "src/shared/api/types";
import DiscountPercentage from "src/entities/home/discountPercentage/DiscountPercentage";

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
        "hover:border-01B9C5100 hover:bg-01B9C55 hover:cursor-pointer " +
        "xs:w-[295px] xs:h-[133px] xs:pl-[20px] xs:pt-[24px] xs:flex xs:flex-col gap-[12px]"
      }
      onClick={() => tariffChoice(tariff)}
    >
      <div className={"absolute radio top-[31px] right-[27px] bottom-0 " + "xs:top-[24px] xs:right-[20px]"}>
        <input checked={markCheck(tariff)} type={"radio"} onChange={() => tariffChoice(tariff)} />
      </div>

      <div>
        <div className={"font-bebasNeueCyrillic text-[26px] text-2D3242 xs:text-[24px]"}>{tariff.name}</div>
        <div
          className={
            "inline-block h-auto crossing-out font-ptRootUIBold text-2D3242 text-[20px] leading-[110%] " +
            "xs:absolute xs:top-[84px] xs:right-[20px] xs:bottom-[27px]"
          }
        >
          {priceInitial}
        </div>
      </div>

      <div className={"pl-[14px] pb-[24px] pt-[16px] xs:hidden"}>
        <div className={"line w-[134px] xs:hidden"}></div>
      </div>

      <div className={"relative inline-block xs:w-fit"}>
        <div className={"font-ptRootUIBold inline-block text-[46px] text-2D3242 leading-[110%]"}>{`${tariff.price}₽`}</div>
        <DiscountPercentage discountPercentage={sale} typeWindow={"popup"} />
      </div>
    </div>
  );
};

export default TariffSalePopup;
