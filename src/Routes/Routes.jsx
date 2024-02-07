import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Contact from "../Pages/ContactUs/Contact";
import Dashbord from "../Layout/Dashbord";
import EmployeeList from "../Pages/Dashboard/HrDeshbord/EmployeeList";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashbord></Dashbord>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "dashboard/employee_list",
        element: <EmployeeList></EmployeeList>,
      },
    ],
  },
]);

export default Routes;
