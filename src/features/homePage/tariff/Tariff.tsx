import { FC } from "react";
import { FitnessTariff, FitnessTariffDescription } from "src/shared/api/types";
import { getSale } from "src/features/homePage/tariff/helper";
import { useAppSelector } from "src/shared/store/hooks";

interface TariffProps {
  tariff: FitnessTariff;
  descriptionTariff: FitnessTariffDescription | undefined;
  initialTariff: FitnessTariff | undefined;
}

const Tariff: FC<TariffProps> = ({ tariff, descriptionTariff, initialTariff }) => {
  const isPopular = useAppSelector((state) => state.time.isPopular);
  const isForever = tariff.name.toLowerCase() === "навсегда";

  return (
    <div
      className={
        "relative flex border-[2px] border-D3D6DD rounded-[20px] hover:border-01B9C5100 hover:bg-01B9C55 hover:cursor-pointer" +
        ` ${isForever ? "justify-between h-[125px]" : "w-[187px] h-[261px] flex-col pl-[31px] pr-[36px] last:pl-[18px] last:pr-[23px]"}`
      }
    >
      {isPopular && (
        <div
          className={
            "absolute bg-star w-[66px] h-[65px] top-[-30px] right-[5px] flex justify-center items-center" +
            ` ${isForever ? "left-[510px]" : "left-[112px]"}`
          }
        >
          <div className={"font-ptRootUIMedium text-FFFFFF text-[19px] leading-[130%]"}>
            {`${-getSale(tariff.price, Number(initialTariff?.price))}%`}
          </div>
        </div>
      )}

      <div className={"flex" + ` ${isForever ? "gap-[18px] pl-[31px] pt-[23px]" : "flex-col gap-[21px] pt-[31px]"}`}>
        <div
          className={
            "leading-1 font-bebasNeueCyrillic " +
            ` ${isForever ? "pt-[4px] text-[38px] text-2D3242" : "text-small text-687078"}`
          }
        >
          {`${tariff.name}`}
        </div>
        <div className={"h-auto"}>
          <div className={"h-[55px] font-ptRootUIBold text-2D3242 text-large  leading-[110%]"}>{`${tariff.price}₽`}</div>

          {isPopular && (
            <div className={"flex justify-end"}>
              <div className={"relative w-auto font-ptRootUIMedium text-95979F text-[24px]"}>
                {`${initialTariff?.price}₽`}
                <div className={"absolute w-full h-[1.2px] top-0 left-0 right-0 bottom-0 bg-95979F my-auto"}></div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className={
          "absolute font-ptRootUIMedium text-[16px] leading-[130%]" +
          ` ${isForever ? "w-[161px] top-[25px] right-[52px] bottom-[37px]" : "w-[118px] left-[50%] bottom-[23px] translate-x-[-50%] text-center"}`
        }
      >
        {descriptionTariff?.description}
      </div>
    </div>
  );
};

export default Tariff;
