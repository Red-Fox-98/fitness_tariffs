import { FC } from "react";
import Time from "src/entities/header/time/Time";

const Header: FC = () => {
  return (
    <div className={"h-[80px] bg-white flex justify-center items-center"}>
      <div className={"w-[410px] xs:w-[375px] h-[79px] flex justify-center items-center gap-[15px] xs:gap-[10px]"}>
        <span
          className={
            "font-ptRootUIBold text-2D3242 text-small leading-[130%] text-nowrap " + "xs:text-[16px] xs:font-ptRootUIMedium"
          }
        >
          {"Скидка действует:"}
        </span>
        <Time />
      </div>
    </div>
  );
};

export default Header;
