import React from "react";
import { useLocation } from "react-router-dom";

const breadcrumbs = [
  {
    path: "/",
    name: "Google E-Commerce",
    description: "Our Products",
  },
  {
    path: "/products",
    name: "Products Details",
    description: "Our Products Digital",
  },
];
function Header() {
  const location = useLocation();

  function checkLocation() {
    // console.log(location.pathname);
    return breadcrumbs.find(
      (val) => val.path.includes(location.pathname.split("/")[1]) // output {0: 'products', 1: 'id'}
    );
  }
  const path = checkLocation();

  return (
    <header>
      {path ? (
        <div>
          <h1>{path.name}</h1>
          <p>{path.description}</p>
        </div>
      ) : null}
    </header>
  );
}

export default Header;
