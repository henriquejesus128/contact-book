import { useLocation } from "react-router-dom";
import Dashboarded from "../Dashboarded";
import Login from "../Login";
import Signup from "../Signup";
import { MainStyle } from "./style";

const Main = () => {
  let location = useLocation();
  return (
    <MainStyle>
      {location.pathname === `/register` ? (
        <Signup />
      ) : location.pathname === `/dashboard` ? (
        <Dashboarded />
      ) : (
        <Login />
      )}
    </MainStyle>
  );
};
export default Main;
