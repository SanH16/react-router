import React from "react";
import auth from "../utils/auth";
import { Outlet } from "react-router-dom";
import UnauthorizedPages from "../pages/UnauthorizedPages";

export default function PrivateRouter() {
  if (auth.isAuthorized()) {
    return <Outlet />; // jika sudah login, navigate home
  }
  return <UnauthorizedPages />; //jika belum, navigate ke page unauthorized
}
