import Header from "./Header";
import MainHome from "./MainHome";
import Profile from "./Profile";

const Home = () => {
  return (
    <div className="">
      <Header />
      <div className="h-[90vh] overflow-y-scroll ">
        <MainHome />
        <Profile />
      </div>
    </div>
  );
};

export default Home;
