import { FC } from "react";
import Time from "src/entities/header/time/Time";

const Header: FC = () => {
  return (
    <div className={"w-screen h-[80px] bg-white flex items-center justify-center"}>
      <div className={"w-[410px] h-[79px] flex items-center gap-[15px]"}>
        <span className={"font-ptRootUI text-2D3242 text-small leading-[130%] text-nowrap"}>{"Скидка действует:"}</span>
        <Time />
      </div>
    </div>
  );
};

export default Header;
