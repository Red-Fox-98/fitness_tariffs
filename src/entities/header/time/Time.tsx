import { FC, useEffect, useState } from "react";
import Colon from "src/shared/uikit/Colon";
import Number from "src/entities/header/number/Number";
import { useAppDispatch } from "src/shared/store/hooks";
import { isLittleTimeSwitch } from "src/shared/store/Time/slice";

const Time: FC = () => {
  const [time, setTime] = useState(120);
  const [isFlashing, setIsFlashing] = useState(false);
  const dispatch = useAppDispatch();
  const minute = Math.floor(time / 60);
  const second = time % 60;

  useEffect(() => {
    const handleChange = () => {
      if (time === 31) dispatch(isLittleTimeSwitch());
      if (time > 0) setTime((prevState) => (prevState -= 1));
      setIsFlashing(time <= 30 && time != 0);
    };
    setTimeout(handleChange, 1000);
  }, [time, dispatch]);

  const outputTime = (number: number, text_form = ["а", "ы", ""]) => {
    const n = number % 10;
    if (n == 1) return text_form[0];
    else if (n >= 2 && n <= 4) return text_form[1];
    return text_form[2];
  };

  return (
    <div className={`w-[140px] flex gap-[12px] relative ${isFlashing && "animate-flashing"}`}>
      <Number number={minute} timeUnit={"минут" + outputTime(minute)} />
      <Colon />
      <Number number={second} timeUnit={"секунд" + outputTime(second)} />
    </div>
  );
};

export default Time;
