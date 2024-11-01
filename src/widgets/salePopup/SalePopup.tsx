import { FC } from "react";
import Popup from "src/shared/uiKit/Popup/Popup";
import { useAppDispatch } from "src/shared/store/hooks";
import { isDiscountSwitch } from "src/shared/store/Time/slice";
import DescriptionSalePopup from "src/entities/salePopup/descriptionSalePopup/DescriptionSalePopup";
import Button from "src/shared/uiKit/Button/Button";
import TariffMapSalePopup from "src/features/salePopup/tariffMapSalePopup/TariffMapSalePopup";
import { FitnessTariff, FitnessTariffSale } from "src/shared/api/types";
import ButtonClose from "src/features/salePopup/buttonClose/ButtonClose";
import SpecialOffer from "src/entities/salePopup/specialOffer/SpecialOffer";

interface SalePopupProps {
  tariffs: FitnessTariff[];
  sales: FitnessTariffSale[];
}

const SalePopup: FC<SalePopupProps> = ({ tariffs, sales }) => {
  const dispatch = useAppDispatch();
  const handleClose = () => {
    dispatch(isDiscountSwitch());
  };

  return (
    <Popup onClose={handleClose}>
      <div className={"relative w-[750px] h-[658px] xs:w-[335px] xs:h-[778px] bg-F5F7F7"}>
        <ButtonClose onClick={handleClose} />
        <SpecialOffer />
        <div className={"flex flex-col gap-[40px] xs:gap-[26px]"}>
          <div className={"flex justify-center"}>
            <DescriptionSalePopup />
          </div>
          <div
            className={
              "w-[670px] h-[248px] pl-[40px] flex flex-col gap-[20px] xs:gap-[14px] " +
              "xs:w-[335px] xs:h-auto xs:items-center xs:pl-0"
            }
          >
            <div className={"font-ptRootUIMedium text-[24px] leading-[130%] " + "xs:text-[15px]"}>
              {"Посмотри, что мы для тебя приготовили 🔥"}
            </div>
            <TariffMapSalePopup tariffs={tariffs} sales={sales} />
            <div className={"flex justify-center pt-[20px] xs:pt-[6px]"}>
              <Button value={"Начать тренироваться"} buttonSize={"popup"} />
            </div>
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default SalePopup;
