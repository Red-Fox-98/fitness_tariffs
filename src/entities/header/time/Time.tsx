import {FC, useEffect, useState} from "react";
import Colon from "src/shared/uikit/Colon";
import Number from "src/entities/header/number/Number";
import {useAppDispatch} from "src/shared/store/hooks";
import {isLittleTimeSwitch} from "src/shared/store/Time/slice";

const Time: FC = () => {
  const [time, setTime] = useState(32);
  const [isFlashing, setIsFlashing] = useState(false);
  const dispatch = useAppDispatch();

  const handleChange = () => {
    if (time === 31) dispatch(isLittleTimeSwitch());
    if (time > 0) setTime(prevState => prevState -= 1);
    setIsFlashing(time <= 30 && time != 0);
  };

  useEffect(() => {
    setTimeout(handleChange, 1000);
  }, [time]);

  return (
    <div className={`w-[140px] flex gap-[12px] relative ${isFlashing && "animate-flashing"}`}>
      <Number number={Math.floor(time / 60)} timeUnit={"минут"}/>
      <Colon/>
      <Number number={time % 60} timeUnit={"секунд"}/>
    </div>
  );
};

export default Time;
