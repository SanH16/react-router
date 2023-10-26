import React from "react";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import NotFoundPages from "../pages/NotFoundPages";
import DetailPages from "../pages/DetailPages";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePages />} />
        <Route path="/products/:id" element={<DetailPages />} />
      </Route>

      <Route>
        <Route path="/404" element={<NotFoundPages />} />
        <Route path="*" element={<Navigate to="/404" replace />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Router;
