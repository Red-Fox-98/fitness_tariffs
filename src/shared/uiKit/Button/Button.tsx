import { FC } from "react";

type buttonSizeType = "home" | "popup";

interface ButtonProps {
  value: string;
  buttonSize: buttonSizeType;
}

const Button: FC<ButtonProps> = ({ value, buttonSize }) => {
  return (
    <button
      className={
        "font-rubikMedium text-[20px] text-FFFFFF leading-[20px] bg-FD4D35 hover:animate-flashing" +
        ` ${buttonSize === "home" && "w-[281px] h-[76px] uppercase rounded-[60px] " + "xs:w-[335px] xs:h-[76px]"}` +
        ` ${buttonSize === "popup" && "w-[310px] h-[62px] rounded-[30px] " + "xs:w-[295px] xs:h-[62px]"}`
      }
    >
      {value}
    </button>
  );
};

export default Button;
