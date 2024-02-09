import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "flowbite-react";

const PrivetRoutes = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();
  console.log(location.pathname);

  if (loading) {
    return (
      <div className="flex justify-center items-center pt-20">
        <Spinner aria-label="Extra large spinner example" size="xl" />
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate state={location.pathname} to="/login"></Navigate>;
};

export default PrivetRoutes;
