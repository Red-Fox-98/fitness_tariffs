import { FC, ReactNode } from "react";

interface PopupProps {
  children?: ReactNode;
  onClose?: () => void;
}

const Popup: FC<PopupProps> = ({ children, onClose }) => {
  return (
    <div className={"absolute flex justify-center top-0 right-0 bottom-0 left-0 bg-0000005 z-10"} onClick={onClose}>
      <div className={"xxl:pt-[248px] xl:pt-[248px] xs:pt-[60px]"} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Popup;
