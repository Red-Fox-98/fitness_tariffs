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
        "font-ptRootUIMedium text-[20px] text-FFFFFF uppercase rounded-[60px] bg-FD4D35 hover:animate-flashing" +
        ` ${buttonSize === "small" ? "w-[281px] h-[76px]" : "w-[310] h-[62px]"}`
      }
    >
      {value}
    </button>
  );
};

export default Button;
