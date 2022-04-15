import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../App";

const RequireAuth = ({ children }) => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }
  return children;
};

export default RequireAuth;
