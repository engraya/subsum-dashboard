import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PublicRoute = () => {
  const isLoggedIn = true
  const isAuthenticated = isLoggedIn;

  return isAuthenticated ? <Navigate to="/" /> : <Outlet />;
};

export default PublicRoute;
