import React from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toogleThemeMode } from "../store/theme";
import Cart from "./cart/Cart";
import { Button } from "@mui/material";

function Navbar() {
  const { mode } = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <>
      <nav className="navbar">
        {/* <h1>Saya Navbar</h1> */}
        <Link to="/login">
          <Button onClick={() => auth.logout()}>Logout</Button>
        </Link>
        <Button variant="outlined" color="secondary" onClick={() => dispatch(toogleThemeMode())}>
          {mode === "light" ? "Dark 🌚" : "Light🌞"}
        </Button>
        <Cart />
        <Link to="/add-articles">
          <Button placeholder="Add articles">Add article</Button>
        </Link>
      </nav>
      <hr />
    </>
  );
}

export default Navbar;
