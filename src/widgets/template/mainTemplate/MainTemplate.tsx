import { FC, ReactNode } from "react";
import Header from "src/widgets/template/header/Header";

interface MainTemplateProps {
  children?: ReactNode;
}

const MainTemplate: FC<MainTemplateProps> = ({ children }) => {
  return (
    <div className={"bg-F5F7F7 h-screen"}>
      <Header />
      <main>{children}</main>
    </div>
  );
};

export default MainTemplate;
