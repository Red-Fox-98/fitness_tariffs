import { FC } from "react";
import { useAppSelector } from "src/shared/store/hooks";

interface NumberProps {
  number: number;
  timeUnit: string;
}

const Number: FC<NumberProps> = ({ number, timeUnit }) => {
  const isLittleTime = useAppSelector((state) => state.time.isLittleTime);
  return (
    <div className={"w-[64px] h-[64px] flex justify-center xs:items-center font-bebasNeue"}>
      <div
        className={
          "w-[49px] h-[60px] text-center text-huge leading-[103%] " + "relative xs:w-[33px] xs:h-[41px] xs:text-medium"
        }
      >
        <div className={isLittleTime ? "text-FD4D35" : "text-01B9C5100"}>{number.toString().padStart(2, "0")}</div>
        <div
          className={
            "font-ptRootUIBold text-[16px] xs:text-[14px] text-818798 leading-[130%] " +
            "absolute left-[50%] bottom-[-11px] translate-x-[-50%] xs:bottom-[-12px]"
          }
        >
          {timeUnit}
        </div>
      </div>
    </div>
  );
};

export default Number;
