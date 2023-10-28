import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../utils/auth";
import { APIauth } from "../apis/APIAuth";

function LoginPage() {
  const navigate = useNavigate();
  // const { search } = useLocation();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const { username, password } = Object.fromEntries(formData);
    // fetch("https://dummyjson.com/auth/login", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({
    //     username,
    //     password,
    //   }),
    // })
    APIauth.login({ username, password }).then(async (response) => {
      console.log(response);
      if (response.status === 400) {
        return alert("your username or password is wrong");
      }

      const { token } = response.data;
      auth.storeAuthCredential(token);

      return navigate("/");

      /** 
       * ! Bug belum di fix untuk redirect route
      let returnTo = "/";
      // console.log({returnTo});

      const params = new URLSearchParams(search);
      const redirectTo = params.get("return_to");

      // if (location.pathname === null) {
      //   return navigate("/");
      // }
      // console.log({redirectTo});

      // if (params) returnTo += redirectTo;
      if (returnTo) returnTo += redirectTo;

      return navigate(returnTo);
       */
    });
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={handleSubmit}>
        <input type="username" name="username" placeholder="enter your username" />
        <input type="password" name="password" placeholder="enter your password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
