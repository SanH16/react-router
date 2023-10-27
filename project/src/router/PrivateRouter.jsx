import React from "react";
import auth from "../utils/auth";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import UnauthorizedPages from "../pages/UnauthorizedPages";
import Layout from "../layout/layout";

export default function PrivateRouter() {
  /**
   * ! Bug belum di fix untuk redirect router
  const location = useLocation();
  const { pathname } = location;

  let path = "/login";
  if (pathname !== "/") {
    path += `?return_to=${pathname.slice(1, pathname.length)}`; //  Output : /login/?return_to=products/1
  }

  console.log(pathname);
   */

  if (auth.isAuthorized()) {
    return (
      <Layout>
        <Outlet />; // jika sudah login, navigate home
      </Layout>
    );
  }

  return <UnauthorizedPages />; //jika belum, navigate ke page unauthorized
  // return <Navigate to={path} />;
}
