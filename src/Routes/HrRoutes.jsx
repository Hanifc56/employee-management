import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import { Spinner } from "flowbite-react";
import useHr from "../Hooks/useHr";

const HrRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isHr, isHrLoading] = useHr();
  const location = useLocation();

  if (loading || isHrLoading) {
    return (
      <div className="flex justify-center items-center pt-20">
        <Spinner
          color="failure"
          aria-label="Extra large spinner example"
          size="xl"
        />
      </div>
    );
  }

  if (user && isHr) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default HrRoute;
