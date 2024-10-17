import { NextPage } from "next";

const Home: NextPage = () => {
  return (
    <div className='desktop:text-blue-500 mobile:text-yellow-600'>
      <div>{"Home"}</div>
    </div>
  );
};

export default Home;
