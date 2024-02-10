import { createBrowserRouter } from "react-router-dom";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import ErrorPage from "../Pages/Error/ErrorPage";
import Contact from "../Pages/ContactUs/Contact";
import Dashbord from "../Layout/Dashbord";
import EmployeeList from "../Pages/Dashboard/HrDeshbord/EmployeeList";
import PrivetRoutes from "./PrivetRoute";
import AllEmployeList from "../Pages/Dashboard/AdminDeshboard/AllEmployeList";
import Progress from "../Pages/Dashboard/HrDeshbord/Progress";
import AdminRoute from "./AdminRoutes";
import Details from "../Pages/Dashboard/HrDeshbord/Details";
import WorkSheet from "../Pages/Dashboard/EmployeeDBord/WorkSheet";
import PymentHistory from "../Pages/Dashboard/EmployeeDBord/PymentHistory";
import HrRoute from "./HrRoutes";

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
      {
        path: "paymentHistory",
        element: <PymentHistory></PymentHistory>,
      },
      {
        path: "workSheet",
        element: <WorkSheet></WorkSheet>,
      },
      // hr Routes
      {
        path: "employee_list",
        element: (
          <HrRoute>
            <EmployeeList></EmployeeList>
          </HrRoute>
        ),
      },
      {
        path: "employee_list/details/:id",
        element: (
          <HrRoute>
            <Details></Details>
          </HrRoute>
        ),
      },
      {
        path: "progress",
        element: (
          <HrRoute>
            <Progress></Progress>
          </HrRoute>
        ),
      },
      // Admin routes
      {
        path: "users",
        element: (
          <AdminRoute>
            <AllEmployeList></AllEmployeList>
          </AdminRoute>
        ),
      },
    ],
  },
]);

export default Routes;
