import { FC } from "react";
import markdownit from "markdown-it";
import parse from "html-react-parser";
import Button from "src/shared/uiKit/Button/Button";

const mdParser = markdownit();

const DescriptionTariffMap: FC = () => {
  return (
    <div className={"pt-[13px] xs:pt-[12px] xs:w-screen xs:flex xs:flex-col xs:items-center"}>
      <div
        className={"font-ptRootUIMedium text-[18px] leading-[130%] text-2D3242 mb-[26px] " + "xs:text-[14px] xs:w-[284px]"}
      >
        {"Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц"}
      </div>
      <div className={"privacy-policy w-[454px] mb-[50px] flex gap-[12px] items-center " + "xs:mb-[22px] xs:w-[315px]"}>
        <input type={"checkbox"} checked readOnly />
        <div className={"text-818798 leading-[100%] text-[16px] xs:w-[279px]"}>
          {parse(mdParser.render("Я соглашаюсь с [Правилами сервиса]() и  условиями [Публичной оферты](). "))}
        </div>
      </div>
      <Button value={"Купить"} buttonSize={"home"} />
      <div className={"font-ptRootUIRegular w-[580px] mt-[25px] text-[14px] text-818798 leading-[130%] xs:hidden"}>
        {
          "Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по истечению купленного периода. Дальнейшие списания по тарифам участвующим в акции осуществляются по полной стоимости согласно оферте."
        }
      </div>
    </div>
  );
};

export default DescriptionTariffMap;
