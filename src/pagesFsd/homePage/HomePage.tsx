import React, { FC } from "react";
import img from "src/shared/uiKit/images/Home/Img.png";
import Image from "next/image";
import TariffModule from "src/widgets/home/tariffModule/TariffModule";
import { fitnessTariffDescriptionMock, fitnessTariffsMock, fitnessTariffSaleMock } from "src/shared/api/mock";

const HomePage: FC = () => {
  return (
    <div className={"flex flex-col pt-[27px] xs:pt-[20px]"}>
      <h1
        className={
          "flex justify-center font-rubikBold text-2D3242 text-medium leading-[110%] " + "xs:text-[24px] xs:pl-[20px]"
        }
      >
        Выберите подходящий тарифный план
      </h1>
      <div
        className={
          "flex justify-center items-start gap-[79px] pt-[98px] " + "xs:flex-col xs:pt-[20px] xs:w-[375px] xs:gap-[10px]"
        }
      >
        <Image className={"xs:w-[277px] xs:h-[441px] xs:mx-auto"} src={img} alt={"img"} priority />
        <TariffModule
          tariffs={fitnessTariffsMock}
          sales={fitnessTariffSaleMock}
          descriptions={fitnessTariffDescriptionMock}
        />
      </div>
    </div>
  );
};

export default HomePage;
