import { NextPage } from "next";
import MainTemplate from "src/widgets/template/mainTemplate/MainTemplate";
import HomePage from "src/pagesFsd/homePage/HomePage";

const Home: NextPage = () => {
  return (
    <MainTemplate>
      <HomePage />
    </MainTemplate>
  );
};

export default Home;
