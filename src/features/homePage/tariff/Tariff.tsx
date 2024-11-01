import { FC } from "react";
import { FitnessTariff } from "src/shared/api/types";
import { useAppSelector } from "src/shared/store/hooks";
import DiscountPercentage from "src/entities/home/discountPercentage/DiscountPercentage";

interface TariffProps {
  tariff: FitnessTariff;
  description: string;
  priceInitial: number;
  sale: number;
}

const Tariff: FC<TariffProps> = ({ tariff, description, priceInitial, sale }) => {
  const isPopular = useAppSelector((state) => state.time.isPopular);
  const isForever = tariff.name.toLowerCase() === "навсегда";

  return (
    <div
      className={
        "relative flex border-[2px] border-D3D6DD rounded-[20px] xs:pb-[24px] " +
        "hover:border-01B9C5100 hover:bg-01B9C55 hover:cursor-pointer " +
        "xs:w-[335px] xs:h-auto xs:mx-[20px] xs:pl-[24px] xs:flex-col" +
        ` ${
          isForever
            ? "justify-between xs:justify-normal h-[125px] "
            : "w-[187px] h-[261px] flex-col pl-[31px] pr-[36px] last:pl-[18px] last:pr-[23px] "
        }`
      }
    >
      {isPopular && (
        <DiscountPercentage
          discountPercentage={sale}
          typeWindow={"home"}
          style={`${isForever ? "right-[5px]" : "right-[6px]"}`}
        />
      )}

      <div
        className={
          "flex xs:flex-col xs:gap-[18px] xs:pl-0 xs:pt-[20px]" +
          ` ${isForever ? "gap-[18px] pl-[31px] pt-[23px]" : "flex-col gap-[21px] pt-[31px]"}`
        }
      >
        <div
          className={
            "leading-1 font-bebasNeueCyrillic xs:text-[24px]" +
            ` ${isForever ? "pt-[4px] xs:pt-0 text-[38px] text-2D3242" : "text-small text-687078"}`
          }
        >
          {`${tariff.name}`}
        </div>

        <div className={"h-[55px] xs:h-[48px] xs:absolute xs:top-[26px] xs:left-[140px] xs:bottom-[56px]"}>
          <div className={"font-ptRootUIBold text-2D3242 text-large leading-[110%] " + "xs:text-[44px]"}>
            {`${tariff.price}₽`}
          </div>

          {isPopular && (
            <div className={"flex justify-end xs:absolute xs:right-0 xs:bottom-[-19px] xs:left-0"}>
              <div className={"relative w-auto font-ptRootUIMedium text-95979F text-[24px] xs:text-[20px]"}>
                {`${priceInitial}₽`}
                <div className={"absolute w-full h-[1.2px] top-0 left-0 right-0 bottom-0 bg-95979F my-auto"} />
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={
          "absolute font-ptRootUIMedium text-[16px] leading-[130%] xs:w-[103px] xs:h-auto " +
          "xs:sticky xs:text-[14px] xs:text-left xs:top-[78px] xs:left-[24px] xs:bottom-[26px] xs:translate-x-0" +
          ` ${
            isForever
              ? "w-[161px] top-[25px] right-[52px] bottom-[37px] xs:w-[120px] "
              : "w-[118px] left-[50%] bottom-[23px] translate-x-[-50%] text-center"
          }`
        }
      >
        {description}
      </div>
    </div>
  );
};

export default Tariff;
