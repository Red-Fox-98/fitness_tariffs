import React, { FC, ReactNode } from "react";
import Header from "src/widgets/template/header/Header";
import { useAppSelector } from "src/shared/store/hooks";
import SalePopup from "src/widgets/salePopup/SalePopup";
import { fitnessTariffsMock, fitnessTariffSaleMock } from "src/shared/api/mock";

interface MainTemplateProps {
  children?: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  const isDiscount = useAppSelector((state) => state.time.isDiscount);
  return (
    <div className={"bg-F5F7F7 h-screen xs:h-fit relative"}>
      <Header />
      <main>{children}</main>
      {isDiscount && <SalePopup tariffs={fitnessTariffsMock} sales={fitnessTariffSaleMock} />}
    </div>
  );
};

export default MainTemplate;
