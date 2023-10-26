import React from "react";
import NotFound from "../components/NotFound";
import { Link } from "react-router-dom";

function NotFoundPages() {
  return (
    <>
      <div className="wrapper">
        <NotFound />
        <Link to={"/"}>
          <h1 className="text">404 | Not Found</h1>
        </Link>
      </div>
    </>
  );
}

export default NotFoundPages;
