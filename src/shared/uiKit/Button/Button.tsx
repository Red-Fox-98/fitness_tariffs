import { FC } from "react";

type buttonSizeType = "small" | "large";

interface ButtonProps {
  value: string;
  buttonSize: buttonSizeType;
}

const Button: FC<ButtonProps> = ({ value, buttonSize }) => {
  return (
    <button
      className={
        "font-rubikMedium text-[20px] text-FFFFFF leading-[20px] bg-FD4D35 hover:animate-flashing" +
        ` ${buttonSize === "small" && "w-[281px] h-[76px] uppercase rounded-[60px]"}` +
        ` ${buttonSize === "large" && "w-[310px] h-[62px] rounded-[30px]"}`
      }
    >
      {value}
    </button>
  );
};

export default Button;
