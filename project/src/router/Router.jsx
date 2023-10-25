import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import NotFoundPages from "../pages/NotFoundPages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/*" element={<NotFoundPages />} />
    </Routes>
  );
}

export default Router;
