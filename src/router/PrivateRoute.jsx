import React, { use } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  const navigate = useNavigate()

  if (loading)
    return (
      <div className="flex justify-center items-center h-screen">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  return user ? <div>{children}</div> : navigate('/auth/login');
};

export default PrivateRoute;
