import { FC } from "react";
import markdownit from "markdown-it";
import parse from "html-react-parser";

const mdParser = markdownit();

const DescriptionSalePopup: FC = () => {
  return (
    <div className={"pt-[30px] w-[573px] xs:w-full flex flex-col gap-[22px] xs:pt-[22px]"}>
      <div
        className={
          "strong1 font-rubikBold text-12191D text-small leading-[130%] " + "xs:text-[24px] xs:w-[245px] xs:mx-auto"
        }
      >
        {parse(mdParser.render("Не упусти свой __последний шанс__".toUpperCase()))}
      </div>
      <div className={"flex flex-col gap-[8px]"}>
        <div
          className={
            "strong2 font-ptRootUIMedium text-[24px] text-12191D leading-[130%] flex justify-center " + "xs:text-[15px]"
          }
        >
          {parse(mdParser.render("Мы знаем, как трудно начать.. __Поэтому!__"))}
        </div>
        <div
          className={
            "strong1 w-[458px] h-[59px] font-ptRootUIBold text-[24px] leading-[130%] border-[1.5px] " +
            "border-01B9C5100 rounded-[30px] flex justify-center items-center mx-auto " +
            "xs:text-[15px] xs:w-[295px] xs:h-[45px]"
          }
        >
          {parse(mdParser.render("Дарим скидку для __лёгкого старта__ 🏃‍♂️"))}
        </div>
      </div>
    </div>
  );
};

export default DescriptionSalePopup;
