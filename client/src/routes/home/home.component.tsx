import { Outlet } from "react-router-dom";

import Directory from "../../components/directory/directory.component";
import { HomeContainer } from "./home.styles";

const Home = () => {
  return (
    <HomeContainer>
      <div>
        <span>Welcome, please sign in or sign up to continue</span>
        <Directory />
        <Outlet />
      </div>
    </HomeContainer>
  );
};

export default Home;
