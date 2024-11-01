import { FC } from "react";

type typeWindow = "home" | "popup";

interface DiscountPercentageProps {
  discountPercentage: number;
  style?: string;
  typeWindow: typeWindow;
}

const DiscountPercentage: FC<DiscountPercentageProps> = ({ discountPercentage, typeWindow, style }) => {
  return (
    <div
      className={
        "absolute flex justify-center items-center bg-no-repeat " +
        style +
        ` ${
          typeWindow === "home" &&
          "bg-starLarge w-[66px] h-[65px] top-[-30px] right-[5px] " +
            "xs:bg-starMedium xs:w-[50px] xs:h-[50px] xs:top-[4px] xs:right-[9px] xs:bottom-[86px]"
        }` +
        ` ${
          typeWindow === "popup" &&
          "bg-starMedium w-[50px] h-[50px] top-[-14px] right-[-50px] " +
            "xs:w-[40px] xs:h-[40px] xs:bg-starSmall xs:top-[-3px] xs:right-[-46px] xs:bottom-0"
        }`
      }
    >
      <div
        className={
          "font-ptRootUIMedium text-FFFFFF leading-[130%]" +
          ` ${typeWindow === "home" && "text-[19px] xs:text-[13px]"}` +
          ` ${typeWindow === "popup" && "text-[13px] xs:text-[11px]"}`
        }
      >
        <div>{`${-discountPercentage}%`}</div>
      </div>
    </div>
  );
};

export default DiscountPercentage;
