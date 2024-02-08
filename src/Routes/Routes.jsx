import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Contact from "../Pages/ContactUs/Contact";
import Dashbord from "../Layout/Dashbord";
import EmployeeList from "../Pages/Dashboard/HrDeshbord/EmployeeList";
import PrivetRoutes from "./PrivetRoutes";
import AllEmployeList from "../Pages/Dashboard/AdminDeshboard/AllEmployeList";
import Progress from "../Pages/Dashboard/HrDeshbord/Progress";

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
    element: (
      <PrivetRoutes>
        <Dashbord></Dashbord>
      </PrivetRoutes>
    ),
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // employee routes
      // hr Routes
      {
        path: "employee_list",
        element: <EmployeeList></EmployeeList>,
      },
      {
        path: "progress",
        element: <Progress></Progress>,
      },
      // Admin routes
      {
        path: "users",
        element: <AllEmployeList></AllEmployeList>,
      },
    ],
  },
]);

export default Routes;
