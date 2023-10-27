import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import { useSelector } from "react-redux";
import { selectTheme } from "../store/theme/toogleSlice";
import { useLayoutEffect } from "react";

export default function Layout() {
  const { mode } = useSelector(selectTheme);

  useLayoutEffect(() => {
    const element = document.body;
    if (mode === "dark") {
      element.classList.add("theme-dark");
    } else {
      element.classList.remove("theme-dark");
    }
  }, [mode]);

  return (
    <div>
      <Navbar />
      <Content />
      <Footer />
    </div>
  );
}
