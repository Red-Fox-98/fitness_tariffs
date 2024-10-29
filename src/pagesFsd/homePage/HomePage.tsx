import { FC } from "react";
import img from "src/shared/uikit/images/Home/Img.png";
import Image from "next/image";
import TariffModule from "src/widgets/home/tariffModule/TariffModule";
import { fitnessTariffDescriptionMock, fitnessTariffsMock } from "src/shared/api/mock";

const HomePage: FC = () => {
  return (
    <div className={"flex flex-col pt-[27px]"}>
      <h1 className={"flex justify-center font-Rubik text-2D3242 text-medium"}>Выберите подходящий тарифный план</h1>
      <div className={"flex justify-center gap-[79px] pt-[68px]"}>
        <Image className={"pt-[29px]"} src={img} alt={"img"} priority />
        <TariffModule tariffs={fitnessTariffsMock} tariffsDescription={fitnessTariffDescriptionMock} />
      </div>
    </div>
  );
};

export default HomePage;
