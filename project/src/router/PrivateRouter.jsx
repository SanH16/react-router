import React from "react";
import auth from "../utils/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UnauthorizedPages from "../pages/UnauthorizedPages";

export default function PrivateRouter() {
  const location = useLocation();
  const { pathname } = location;

  let path = "/login";
  if (pathname !== "/") {
    path += `?return_to=${pathname.slice(1, pathname.length)}`; //  Output : /login/?return_to=products/1
  }

  console.log(pathname);
  if (auth.isAuthorized()) {
    return <Outlet />; // jika sudah login, navigate home
  }

  // return <UnauthorizedPages />; //jika belum, navigate ke page unauthorized
  return <Navigate to={path} />;
}
