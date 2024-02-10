import { Helmet } from "react-helmet-async";
import { FaBlog, FaChartPie, FaHome, FaList, FaMobile } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../Hooks/useAdmin";
import useHr from "../Hooks/useHr";

const Dashbord = () => {
  // TODO: get isAdmin value form database
  const [isAdmin] = useAdmin();
  // const [isHr] = useHr();
  const isHr = false;
  return (
    <div className="flex max-w-7xl mx-auto">
      <Helmet>
        <title>EMS | DASHBOARD</title>
      </Helmet>
      {/* dashboard Side bar */}

      <div className="w-32 md:w-64 min-h-screen bg-gray-300">
        <ul className="manu active  p-4">
          {/* conditional routes */}

          {isAdmin ? (
            <>
              <li className="bg-white rounded-lg md:p-4 md:m-4 my-2 p-2 ">
                <NavLink to="users">
                  <FaList className="inline-block ml-2"></FaList> All Employee
                  List
                </NavLink>
              </li>
            </>
          ) : isHr ? (
            <>
              <li className="bg-white rounded-lg md:p-4 md:m-4 my-2 p-2">
                <NavLink to="employee_list">
                  <FaList className="inline-block ml-2"></FaList> Employee List
                </NavLink>
              </li>
              <li className="bg-white rounded-lg md:p-4 md:m-4 my-2 p-2">
                <NavLink to="progress">
                  <FaChartPie className="inline-block ml-2 "></FaChartPie>{" "}
                  Progress
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="bg-white rounded-lg md:p-4 md:m-4 my-2 p-2">
                <NavLink to="paymentHistory">
                  <FaList className="inline-block ml-2"></FaList> Payment
                  History
                </NavLink>
              </li>
              <li className="bg-white rounded-lg md:p-4 md:m-4 my-2 p-2">
                <NavLink to="workSheet">
                  <FaChartPie className="inline-block ml-2 "></FaChartPie>{" "}
                  Work-Sheet
                </NavLink>
              </li>
            </>
          )}
          {/* common routes */}
          {/* devider */}
          <hr className="my-3 border-2 border-black rounded-full" />

          <li className="bg-white rounded-lg md:p-4 md:m-4 my-2 p-2">
            <NavLink to="/">
              <FaHome className="inline-block ml-2"></FaHome> Home
            </NavLink>
          </li>
          <li className="bg-white rounded-lg md:p-4 md:m-4 my-2 p-2">
            <NavLink to="/contact">
              <FaMobile className="inline-block ml-2"></FaMobile> Contact
            </NavLink>
          </li>
          <li className="bg-white rounded-lg md:p-4 md:m-4 my-2 p-2">
            <NavLink to="/login">
              <FaBlog className="inline-block ml-2 "></FaBlog> login
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
