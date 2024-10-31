import {FC, useEffect, useState} from "react";
import Colon from "src/shared/uiKit/icons/Colon";
import Number from "src/entities/header/number/Number";
import {useAppDispatch, useAppSelector} from "src/shared/store/hooks";
import {getIsFlashing, timeChange, timeOutput} from "src/entities/header/time/helper";
import {isDiscountSwitch, isLittleTimeSwitch, isPopularSwitch} from "src/shared/store/Time/slice";

const Time: FC = () => {
  const [time, setTime] = useState(35);
  const [minute, second] = [Math.floor(time / 60), time % 60];
  const isLittleTime = useAppSelector((state) => state.time.isLittleTime);
  const isPopular = useAppSelector((state) => state.time.isPopular);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setTimeout(() => setTime(timeChange(time)), 1000);
    if (!isLittleTime && time === 30) {
      dispatch(isLittleTimeSwitch());
    }
    if ((time === 0 && isPopular) || (time !== 0 && !isPopular)) {
      dispatch(isPopularSwitch());
    }
    if(time === 0 && !isPopular) {
      dispatch(isDiscountSwitch());
    }
  }, [dispatch, time, isLittleTime, isPopular]);

  return (
    <div
      className={`relative w-[140px] flex gap-[12px] ${getIsFlashing(time, isLittleTime) && "animate-flashing"}`}>
      <Number number={minute} timeUnit={"минут" + timeOutput(minute)}/>
      <Colon/>
      <Number number={second} timeUnit={"секунд" + timeOutput(second)}/>
    </div>
  );
};

export default Time;
