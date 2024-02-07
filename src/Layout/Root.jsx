import { Outlet } from "react-router-dom";
import NavigationBar from "../Pages/Shared/NavigationBar";
import FooterD from "../Pages/Shared/FooterD";

const Root = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <NavigationBar></NavigationBar>
      <Outlet></Outlet>
      <FooterD></FooterD>
    </div>
  );
};

export default Root;
