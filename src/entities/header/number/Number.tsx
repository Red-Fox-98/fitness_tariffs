import { FC } from "react";
import { useAppSelector } from "src/shared/store/hooks";

interface NumberProps {
  number: number;
  timeUnit: string;
}

const Number: FC<NumberProps> = ({ number, timeUnit }) => {
  const isLittleTime = useAppSelector((state) => state.time.isLittleTime);
  return (
    <div className={"w-[64px] h-[64px] flex justify-center font-bebasNeue"}>
      <div className={"w-[49px] h-[60px] text-center text-large leading-[103%] relative"}>
        <div className={isLittleTime ? "text-FD4D35" : "text-01B9C5"}>{number.toString().padStart(2, "0")}</div>
        <div
          className={
            "font-ptRootUI text-[16px] text-818798 leading-[130%] absolute left-[50%] bottom-[-11px] translate-x-[-50%]"
          }
        >
          {timeUnit}
        </div>
      </div>
    </div>
  );
};

export default Number;
