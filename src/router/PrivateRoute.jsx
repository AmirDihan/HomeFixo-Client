import React, { use } from "react";
import AuthContext from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const location = useLocation();
  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  return user ? (
    <div>{children}</div>
  ) : (
    <Navigate to={"/auth/login"} state={{ from: location }} replace></Navigate>
  );
};

export default PrivateRoute;
