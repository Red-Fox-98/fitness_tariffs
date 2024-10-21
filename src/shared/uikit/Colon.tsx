import { FC } from "react";
import { useAppSelector } from "src/shared/store/hooks";

const Colon: FC = () => {
  const isLittleTime = useAppSelector((state) => state.time.isLittleTime);
  return (
    <svg
      className={`w-[5px] h-[15px] absolute left-[50%] top-[22px] translate-x-[-50%] ${isLittleTime ? "fill-FD4D35" : "fill-01B9C5"}`}
      width='5'
      height='15'
      viewBox='0 0 5 15'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g opacity='0.5'>
        <circle cx='2.50366' cy='2.5' r='2.5' />
        <circle cx='2.50366' cy='12.5' r='2.5' />
      </g>
    </svg>
  );
};

export default Colon;
