import { FC } from "react";
import markdownit from "markdown-it";
import parse from "html-react-parser";
import Button from "src/shared/uikit/Button/Button";

const mdParser = markdownit();

const DescriptionTariffMap: FC = () => {
  return (
    <div className={"pt-[13px]"}>
      <div className={"font-ptRootUIMedium text-[18px] leading-[130%] text-2D3242 mb-[26px]"}>
        {"Следуя плану на 3 месяца, люди получают в 2 раза лучший результат, чем за 1 месяц"}
      </div>
      <div className={"privacy-policy w-[454px] mb-[50px] flex gap-[12px] items-center text-818798 leading-[100%]"}>
        <input type={"checkbox"} checked readOnly/>
        {parse(mdParser.render("Я соглашаюсь с [Правилами сервиса]() и  условиями [Публичной оферты](). "))}
      </div>
      <Button value={"Купить"} buttonSize={"small"} />
      <div className={"font-ptRootUIRegular w-[580px] mt-[25px] text-[14px] text-818798 leading-[130%]"}>
        {
          "Нажимая «Купить», Пользователь соглашается на автоматическое списание денежных средств по истечению купленного периода. Дальнейшие списания по тарифам участвующим в акции осуществляются по полной стоимости согласно оферте."
        }
      </div>
    </div>
  );
};

export default DescriptionTariffMap;
