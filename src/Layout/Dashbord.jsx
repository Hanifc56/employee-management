import { FaBlog, FaChartPie, FaHome, FaList, FaMobile } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="flex max-w-7xl mx-auto">
      {/* dashboard Side bar */}
      <div className="w-64 min-h-screen bg-gray-300">
        <ul className="manu active  p-4">
          <li className="bg-white rounded-lg p-4 m-4  ">
            <NavLink to="dashboard/employee_list">
              <FaList className="inline-block ml-2"></FaList> Employee List
            </NavLink>
          </li>
          <li className="bg-white rounded-lg p-4 m-4">
            <NavLink to="dashboard/">
              <FaChartPie className="inline-block ml-2"></FaChartPie> Progress
            </NavLink>
          </li>
          <hr className="my-3" />
          <li className="bg-white rounded-lg p-4 m-4">
            <NavLink to="/">
              <FaHome className="inline-block ml-2"></FaHome> Home
            </NavLink>
          </li>
          <li className="bg-white rounded-lg p-4 m-4">
            <NavLink to="/contact">
              <FaMobile className="inline-block ml-2"></FaMobile> Contact
            </NavLink>
          </li>
          <li className="bg-white rounded-lg p-4 m-4">
            <NavLink to="/login">
              <FaBlog className="inline-block ml-2"></FaBlog> login
            </NavLink>
          </li>
        </ul>
      </div>

      {/* Deshboard Content */}
      <div className="flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashbord;
