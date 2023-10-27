import React from "react";
import { Link } from "react-router-dom";
import auth from "../utils/auth";
import { useDispatch, useSelector } from "react-redux";
import { selectTheme, toogleThemeMode } from "../store/theme/toogleSlice";

function Navbar() {
  const { mode } = useSelector(selectTheme);
  const dispatch = useDispatch();

  return (
    <header className="navbar">
      <h1>Saya Navbar</h1>
      <Link to="/login">
        <button onClick={() => auth.logout()}>Logout</button>
      </Link>
      <button onClick={() => dispatch(toogleThemeMode())}>{mode === "light" ? "🌚" : "🌞"}</button>
      <hr />
    </header>
  );
}

export default Navbar;
