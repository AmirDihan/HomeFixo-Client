import React, { use } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";
import { DotLoader } from "react-spinners";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className="flex justify-center items-center">
        <DotLoader></DotLoader>
      </div>
    );
  return user ? (
    <div>{children}</div>
  ) : (
    <Navigate to={"/auth/login"} state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
