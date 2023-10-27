import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Content from "../components/Content";
import { useSelector } from "react-redux";
import { useLayoutEffect } from "react";
import { selectTheme } from "../store/theme";
import Header from "../components/Header";

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
      <Header />
      <Content />
      <Footer />
    </div>
  );
}
