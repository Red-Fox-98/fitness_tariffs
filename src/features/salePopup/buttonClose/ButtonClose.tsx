import { FC } from "react";

interface ButtonCloseProps {
  onClick: () => void;
}

const ButtonClose: FC<ButtonCloseProps> = ({ onClick }) => {
  return (
    <button className={"absolute w-[24px] h-[24px] top-[20px] right-[20px] bottom-0"} onClick={onClick}>
      <div className={"btn-close"}></div>
    </button>
  );
};

export default ButtonClose;
