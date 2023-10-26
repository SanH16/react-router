import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePages from "../pages/HomePages";
import NotFoundPages from "../pages/NotFoundPages";
import DetailPages from "../pages/DetailPages";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePages />} />
      <Route path="/products/:id" element={<DetailPages />} />
      <Route path="/*" element={<NotFoundPages />} />
    </Routes>
  );
}

export default Router;
