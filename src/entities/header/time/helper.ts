export const getIsFlashing = (time: number, isLittleTime: boolean) => {
  return isLittleTime && time <= 30 && time !== 0;
};

export const timeChange = (time: number) => {
  return time > 0 ? (time -= 1) : time;
};

export const timeOutput = (number: number, text_form = ["а", "ы", ""]) => {
  const n = number % 10;
  if (n == 1) return text_form[0];
  else if (n >= 2 && n <= 4) return text_form[1];
  return text_form[2];
};
